FROM openjdk:17
WORKDIR /app
COPY target/employee-service.jar employee-service.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "employee-service.jar"]
