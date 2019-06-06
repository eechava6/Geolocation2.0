# Final project - Geolocation 2.0


## Members

* Esteban Perez 
* Esteban Echavarría


### Build a container image for a microservice: 

* Go to the desired microservice folder and paste the following code

`docker build -t {image-name} .`

### Run the container and map container port to local port:

* Once the image was created, run the image in a desired port.

`docker run -p {local-desired-port}:{running-port-in-container}/tcp  {image-name}`

**example**: run the image usersMS mapping container port 5000/tcp to local port 3000

`docker run -p 3000:5000/tcp  usersMS`

**to run nginx** 

`docker run -p 80:80 -p 443:443 -v /etc/certificates:/etc/certificates --name nginx nginx`

**to pass parameters**

`docker run -p 4000:4000 -e PORT=4000 HOST={host} EUREKA={eureka-host} --name {service} {service}

