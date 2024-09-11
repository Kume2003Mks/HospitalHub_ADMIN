# Step 1: Use an official Node.js runtime as a parent image
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Install Vite and React dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your application code to the container
COPY . .

# Step 5: Build your Vite.js app
RUN npm run build

# Step 6: Expose the port that the app will run on
EXPOSE 4173

# Step 7: Command to run the app
CMD ["npm", "run", "preview:host"]
