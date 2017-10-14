This is a hello world node.js app ready for Docker/Elastic Beanstalk deployment.

## Deploy on Elastic Beanstalk

```
eb init

eb create 4-single-docker-nodejs-app-DEV

eb deploy 4-single-docker-nodejs-app-DEV
```

## Deploy to docker locally
Run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

    $ docker build -t nextinterfaces/6-python-flask-app .

## List docker images
    $ docker images

## Run the image
    $ docker run -p 49200:8000 -d nextinterfaces/6-python-flask-app

## Open the app
    Running on http://localhost:49200
