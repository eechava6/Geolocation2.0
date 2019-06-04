

#jdk image
FROM adoptopenjdk/openjdk12:jre-12.33

# install

# label for the image
LABEL Description="EurekaServer" Version="0.0.1"

# the version of the archive
ARG VERSION=0.0.1

# mount the temp volume
VOLUME /tmp

# Add the service as app.jar
ADD target/EurekaServer-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8761
# touch the archive for timestamp
RUN sh -c 'touch /app.jar'

# entrypoint to the image on run
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]