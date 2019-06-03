FROM node:9.6.1

LABEL version="1.0"
LABEL description="Microservicio ubicaciones"
LABEL maintainer="Esteban Echavarria - Esteban Pérez"

ARG PORT=4000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE 4000
CMD npm run prod
