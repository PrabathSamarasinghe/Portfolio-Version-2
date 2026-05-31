const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

export async function getGithubStats() {
  const username = process.env.GITHUB_USERNAME;

  const query = `
    query($username: String!) {
      user(login: $username) {
        login
        name
        avatarUrl
        url
        followers {
          totalCount
        }
        repositories(
          first: 100,
          ownerAffiliations: OWNER,
          privacy: PUBLIC,
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          totalCount
          nodes {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                size
                node {
                  name
                }
              }
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { username },
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(JSON.stringify(result.errors));
  }

  const user = result.data.user;
  const repos = user.repositories.nodes;

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazerCount,
    0
  );

  const topLanguages = calculateTopLanguages(repos);
  const contributionData = formatContributionData(
    user.contributionsCollection.contributionCalendar.weeks
  );

  const streak = calculateStreak(contributionData);

  const featuredProjects = repos.slice(0, 6).map((repo) => ({
    title: repo.name,
    description: repo.description || "No description provided",
    github: repo.url,
    demo: repo.homepageUrl || "",
    tech: [
      repo.primaryLanguage?.name,
      ...repo.repositoryTopics.nodes.map((t) => t.topic.name),
    ].filter(Boolean),
    stars: repo.stargazerCount,
    forks: repo.forkCount,
  }));

  return {
    username: user.login,
    name: user.name,
    avatar: user.avatarUrl,
    profileUrl: user.url,
    totalRepos: user.repositories.totalCount,
    totalStars,
    totalContributions:
      user.contributionsCollection.contributionCalendar.totalContributions,
    streak,
    topLanguages,
    contributionData,
    featuredProjects,
  };
}

function calculateTopLanguages(repos) {
  const languageMap = {};

  repos.forEach((repo) => {
    repo.languages.edges.forEach((edge) => {
      const name = edge.node.name;
      languageMap[name] = (languageMap[name] || 0) + edge.size;
    });
  });

  const total = Object.values(languageMap).reduce((a, b) => a + b, 0);

  return Object.entries(languageMap)
    .map(([name, size]) => ({
      name,
      percentage: Math.round((size / total) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);
}

function formatContributionData(weeks) {
  return weeks.map((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
    }))
  );
}

function calculateStreak(contributionData) {
  const days = contributionData.flat().reverse();

  let streak = 0;

  for (const day of days) {
    if (day.count > 0) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}