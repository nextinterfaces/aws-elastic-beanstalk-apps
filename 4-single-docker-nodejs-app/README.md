# base-docker
This is base hello world for building and deploying a Node.JS app on docker

## Building the image
Run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

    $ docker build -t nextinterfaces/node-web-app .

## List docker images
    $ docker images

## Run the image
    $ docker run -p 49160:8080 -d nextinterfaces/node-web-app

## Print the output of the app
    # Get container ID
    $ docker ps

    # Example
    Running on http://localhost:8080

    # Enter the container
    $ docker exec -it <container id> /bin/bash

## Logging
    # Print app output
    $ docker logs <container id>

    # Tail follow  docker logs --help (--details,   -f, --follow, --since string, --tail string,   -t, --timestamps)
    $ docker logs <container id> -f

    # Logging Drivers
    https://docs.docker.com/engine/admin/logging/overview/

## Stop and Deleting containers
    # removing all containers that are not running:
    $ docker rm `docker ps -aq --no-trunc --filter "status=exited"`

    # removes all the dangling non intermediate <none> images:
    $ docker rmi `docker images --filter 'dangling=true' -q --no-trunc`

    # To stops all running containers
    $ docker stop `docker ps -q`

In the example above, Docker mapped the `8080` port inside of the container to the port `49160` on your machine.

`
    $ curl -i localhost:49160
`

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 12
    Date: Sun, 02 Jun 2013 03:53:22 GMT
    Connection: keep-alive

    Hello world

Based on [this tutorial](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
