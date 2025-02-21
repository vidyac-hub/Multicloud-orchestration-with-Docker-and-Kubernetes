# Use Node.js Alpine as base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]