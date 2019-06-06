FROM node:9.6.1

LABEL version="1.0"
LABEL description="Microservicio ubicaciones"
LABEL maintainer="Esteban Echavarria - Esteban Pérez"

ENV PORT $PORT
ENV HOST $HOST
ENV EUREKA $EUREKA

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE $HOST
CMD npm start

CMD ["sh", "-c", "npm run prod ${PORT} ${HOST} ${EUREKA}"]