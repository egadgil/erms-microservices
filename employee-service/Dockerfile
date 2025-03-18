FROM openjdk:17
WORKDIR /app
COPY target/employee-service-1.0-SNAPSHOT.jar employee-service.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "employee-service.jar"]
