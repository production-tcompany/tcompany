.PHONY: build-client build-server build deploy

build-client:
    docker build -t client-image -f client/Dockerfile client/

build-server:
    docker build -t server-image -f server/Dockerfile server/

build: build-client build-server

deploy:
    docker-compose up --build -d
