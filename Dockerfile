# Use Node base image
FROM node:18-alpine as builder
# Set working directory
WORKDIR /app
# Copy all files
COPY . .
# Copy .env file over
COPY ./.env ./.env
# Install dependencies
RUN npm ci
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.23.4-alpine as prod
ENV NODE_ENV production
# Copy react build to /app/build
COPY --from=builder /app/build /usr/share/nginx/html
# Add the nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose the port we want
EXPOSE 80

# Start the app
# CMD ["npx", "serve", "build"]
CMD ["nginx", "-g", "daemon off;"]
