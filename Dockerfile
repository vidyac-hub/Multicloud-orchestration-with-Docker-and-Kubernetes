# Use Node.js Alpine as base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]