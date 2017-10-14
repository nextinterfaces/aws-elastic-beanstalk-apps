# base-docker
This is 2048 JS game ready for deploy on a Nginx, Docker, AWS Beanstalk instance

## Deploy on Elastic Beanstalk

```
eb init

eb create 4-single-docker-nodejs-app-DEV

eb deploy 4-single-docker-nodejs-app-DEV
```

## Deploy to docker locally
Run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

    $ docker build -t nextinterfaces/2048-game .

## Run the image
    $ docker run -p 49100:80 -d nextinterfaces/2048-game

## Open locally
    # http://localhost:49100

