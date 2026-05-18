# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .
RUN npm run build

# Final stage: Serve with Nginx
FROM nginx:alpine

# Install envsubst untuk mengganti variabel environment di nginx config
RUN apk add --no-cache gettext

# Buat direktori cache/temp dengan permission untuk user nginx (101)
RUN mkdir -p /var/cache/nginx/client_temp \
    /var/cache/nginx/proxy_temp \
    /var/cache/nginx/fastcgi_temp \
    /var/cache/nginx/uwsgi_temp \
    /var/cache/nginx/scgi_temp \
    /tmp/nginx \
    /usr/share/nginx/html \
    && chown -R 101:101 /var/cache/nginx \
    /usr/share/nginx/html \
    /tmp/nginx \
    /var/log/nginx \
    /etc/nginx/conf.d \
    && chmod -R 755 /var/cache/nginx \
    /usr/share/nginx/html \
    /tmp/nginx \
    /var/log/nginx \
    /etc/nginx/conf.d

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder --chown=101:101 /app/dist /usr/share/nginx/html

# Update nginx.conf utama: hilangkan user directive (karena sudah run as user 101)
RUN sed -i 's/^user/#user/g' /etc/nginx/nginx.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Gunakan user nginx (uid 101)
USER 101

# Add health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
