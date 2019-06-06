FROM node:9.6.1

LABEL version="1.0"
LABEL description="Microservicio front-end"
LABEL maintainer="Esteban Echavarria - Esteban Pérez"


ENV PORT $PORT
ENV HOST $HOST
ENV EUREKA $EUREKA

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE $HOST
CMD npm start

CMD ["sh", "-c", "node server.js ${PORT} ${HOST} ${EUREKA}"]