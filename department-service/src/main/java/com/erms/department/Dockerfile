FROM openjdk:17
WORKDIR /app
COPY target/department-service.jar department-service.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "department-service.jar"]
