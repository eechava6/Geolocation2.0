# Final project - Geolocation 2.0

# Members

* Esteban Perez - eechava6@eafit.edu.co - 
** Role ** : Architect - Services Developer.
* Esteban Echavarría - eperezn@eafit.edu.co - 
** Role ** : Cloud Engineer - Containers and external tools developer. 



# Diseño

* [Front](front.md)

* [Users](users.md)

* [Locations](locations.md)

* [Eureka](eureka.md)

* [Nginx](nginx.md)

# Project requirements per environment

## Requirements for development environment:

* Node 
* NPM
* MongoDB
* Maven
* Java 12

## Requirements for testing environment:

* Docker
* Docker Desktop (Optional)

## Requirements for production environment:

* Docker
* AWS instance
* SSL certificates for domain
* Domain
* SSH

## Steps to test the project in Development environment:

* Clone the project in your local machine.

`git clone https://github.com/eechava6/Geolocation2.0`

* Install the dependencies for "Locations" "Front" and "Users" microservices(You have to be in the folder were package.json resides) with the following command: 

`NPM install`

* Install cross-env globaly (Once is enoguh)

`NPM install -g cross-env`

* Run Mongo as daemon 

`mongod --config {path-to-conf} `

(By default path-to-conf is /usr/local/etc/mongod.conf in Unix) 

* Build Eureka service with Maven

`mvn clean install`

* Start Eureka server with the generated Jar

`java -jar {path-to-jar/app.jar}`


** example ** : `java -jar target/EurekaServer-0.0.1-SNAPSHOT.jar`

* Start Front-end service  (You have to be in "front" folder)

`npm start {desired-port} {host-ip} {eureka-host-ip}`

* Start Locations/Users service  (You have to be in "Locations/Users" folder respectively) (You need node Cross-env installed)

`npm run dev {desired-port} {host-ip} {eureka-host-ip}`

## Usefull commands

### Build a container image for a microservice: 

* Go to the desired microservice folder and paste the following code

`docker build -t {image-name} .`

### Run the container and map container port to local port

* Once the image was created, run the image in a desired port.

`docker run -p {local-desired-port}:{running-port-in-container}/tcp  {image-name}`

**example**: run the image usersMS mapping container port 5000/tcp to local port 3000

`docker run -p 3000:5000/tcp  usersMS`

**To run nginx** 

`docker run -p 80:80 -p 443:443 -v /etc/certificates:/etc/certificates --name nginx -d nginx`

**To pass parameters to Dockerfile** (Actually this is how microservices works in production 

`docker run -p 4000:4000 -e PORT=4000 -e HOST={host} -e EUREKA={eureka-host} --name {service} -d {service}`

**To run Eureka**

`docker run -p 8761:8080 --name eureka -d eureka
