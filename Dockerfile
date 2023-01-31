FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle
COPY . .

# expose port app runs on
EXPOSE 3000

CMD ["npm", "start"]