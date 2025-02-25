# Use the official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files into the container
COPY . .

# Expose the port that the application uses
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]