# Componente lógico de Backend-API gateway
Componente lógico que hace parte de todo un sistema basado en microsevicios con la funcionalidad de orquestar todos los microservicios y las peticiones que llegan del Front. Es el encargado de armar y hacer las peticiones conjuntas a los diferentes microservicios del sistema haciendo uso del lenguaje de consulta GraphQL. Desplegado en un contenedor Docker.

## Tecnologías

Las tecnologías usadas para la creación de este componente fueron:

- [JavaScript] - Lenguaje de Porgramación base
- [NodeJS] - Entorno de ejecución de Javascript
- [Microservicios] - Los diferentes microservicios que hacen parte del sistema
- [GraphQL] - Lenguaje de consulta para hacer las peticiones
- [RabbitMQ] - Cola de mensajeria que gestiona las peticiones al microservicio correspondiente

### Dockerization: 
  - docker-compose build
  - docker-compose up
