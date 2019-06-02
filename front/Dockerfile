FROM node:9.6.1

LABEL version="1.0"
LABEL description="Microservicio front-end"
LABEL maintainer="Esteban Echavarria - Esteban Pérez"

ARG PORT=5000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE 5000
CMD npm start