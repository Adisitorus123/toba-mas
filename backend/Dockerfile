# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev && npm cache clean --force

# Final stage
FROM node:18-alpine

# Install dumb-init untuk proper signal handling
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy dependencies dari builder
COPY --from=builder /app/node_modules ./node_modules

# Copy application code
COPY server.js .
COPY package.json .
COPY src/ ./src/

# Non-root user untuk security
RUN addgroup -g 1001 appgroup && \
    adduser -u 1001 -G appgroup -s /bin/sh -D appuser
USER appuser

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
