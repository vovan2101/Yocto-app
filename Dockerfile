# Step 1: Build the frontend
FROM node:alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy only the necessary files to avoid rebuilding on code changes
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Copy the built app to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
