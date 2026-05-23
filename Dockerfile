# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

COPY apps/web ./apps/web

RUN cd apps/web && npm ci

RUN cd apps/web && npm run build

# Runtime stage
FROM node:24-alpine

WORKDIR /app

RUN npm install -g serve

# Create a non-root user for security
RUN addgroup -S appuser && \
    adduser -S appuser -G appuser

COPY --from=builder /app/apps/web/dist ./dist

RUN chown -R appuser:appuser /app

USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/ || exit 1

CMD ["serve", "-s", "dist", "-l", "5000"]