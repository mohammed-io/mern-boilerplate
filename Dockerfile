FROM node:8.1.3

# Create the app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install the dependencies from package.json
COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

# Expose 3000 as the port
EXPOSE 3000

# The command to start the app
CMD [ "mongod" ]
CMD [ "npm", "start" ]