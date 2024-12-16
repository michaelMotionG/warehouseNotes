# Use a Node.js base image for building the application
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy dependencies files
COPY package.json ./

# Install dependencies
RUN npm install --frozen-lockfile --non-interactive

# Copy the rest of the application code
COPY . .

# Build the Docusaurus site
RUN npm run build

EXPOSE 3000

CMD [ "npm","run","serve" ]