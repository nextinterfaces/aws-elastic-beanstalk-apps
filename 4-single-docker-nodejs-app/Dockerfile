# Here we will use the latest LTS (long term support) version argon of node available from the Docker Hub
FROM node:6

# Next we create app directory to hold code inside the image, this will be the working directory for your application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# This image comes with Node.js and NPM already installed so the next thing we need to do is to install your app dependencies
COPY package.json /usr/src/app/
RUN npm install

# To bundle your app's source code inside the Docker image, use the COPY instruction:
COPY . /usr/src/app

# Your app (server.js) binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 80

# Define the command to run your app using CMD which defines your runtime.
# Here we will use the basic npm start which will run node server.js to start your server:
CMD [ "npm", "start" ]
