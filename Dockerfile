# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Copy root and app files
COPY package*.json ./
COPY apps/web ./apps/web

# Install dependencies
RUN npm ci

# Build the application
RUN cd apps/web && npm run build

# Runtime stage - serve the built app
FROM node:24-alpine

WORKDIR /app

# Install a simple HTTP server for serving static files
RUN npm install -g serve

# Create a non-root user for security
RUN addgroup -g 1000 appuser && \
    adduser -u 1000 -G appuser -s /sbin/nologin -D appuser

# Copy built application from builder
COPY --from=builder /app/apps/web/dist ./dist

# Set ownership of app directory
RUN chown -R appuser:appuser /app

# Expose port 5000
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/ || exit 1

# Switch to non-root user
USER appuser

# Start the application
CMD ["serve", "-s", "dist", "-l", "5000"]
