# Use Node base image
FROM node:18-alpine
# Set working directory
WORKDIR /app
# Copy all files
COPY . .
# Copy .env file over
COPY ./.container.env ./.env
# Install dependencies
RUN npm ci
# Build the app
RUN npm run build
# Set node production environment
ENV NODE_ENV production
# Expose the port we want
EXPOSE 3000

# Start the app
CMD ["npx", "serve", "build"]