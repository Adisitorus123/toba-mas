#!/bin/sh
set -e

echo "🚀 Starting Toba Mas Frontend..."

# Replace environment variables in nginx.conf
if [ -n "$BACKEND_URL" ]; then
  echo "🔗 Backend URL configured: $BACKEND_URL"
  envsubst '${BACKEND_URL}' < /etc/nginx/conf.d/default.conf > /tmp/nginx-default.conf
else
  echo "⚠️  BACKEND_URL not set. Using default config."
  cp /etc/nginx/conf.d/default.conf /tmp/nginx-default.conf
fi

# Copy main nginx.conf and update include path
cp /etc/nginx/nginx.conf /tmp/nginx.conf
sed -i 's|include /etc/nginx/conf.d/\*.conf;|include /tmp/nginx-default.conf;|' /tmp/nginx.conf

# Start nginx with custom config
echo "🌐 Starting Nginx..."
exec nginx -c /tmp/nginx.conf -g 'daemon off;'
