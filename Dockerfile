FROM node:10-alpine

ENV WD /app

RUN mkdir ${WD} -p
WORKDIR ${WD}

RUN apk add --update python gcc build-base

ADD package.json ${WD}/package.json

RUN npm i -g nodemon@~1.18.6
RUN npm i -g jest@~23.6.0
RUN npm i -g nyc@~13.1.0
RUN npm i -g eslint@~5.9.0

RUN npm i --no-progress --ignore-optional

COPY . ${WD}
