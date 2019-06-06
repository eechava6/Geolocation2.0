# Locations microservice

# Users microservice
# Front End microservice

# 1. Análisis

## 1.1 Funcionalidades:

1. Guardar ubicación
2. Buscar ubicación
3. Cargar Vistas

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:
* Middleware de Node:  body-parser(Parser antes de Handlers), Bcrypt
* Seguridad: Bcrypt (Hashing de contraseñas).
* Lenguaje de Programación: Javascript
* Framework web backend: NodeJS - Express
* Framework web frontend: NO TIENE FRONT-ENTD
* Base de datos: Mongo Atlas
* Web App Server: NodeJS

# 2. Desarrollo

No se generó ninguna base, todo fue creado manualmente.

# 3. Diseño:

## 3.1 Modelo de datos:

# Users microservice
# Front End microservice

# 1. Análisis

## 1.1 Funcionalidades:

1. Crear Usuario.
2. Ingresar 
3. Guardar ubicación
4. Buscar ubicación
5. Cargar Vistas

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:
* Middleware de Node:  body-parser(Parser antes de Handlers), Bcrypt
* Seguridad: Bcrypt (Hashing de contraseñas).
* Lenguaje de Programación: Javascript
* Framework web backend: NodeJS - Express
* Framework web frontend: NO TIENE FRONT-ENTD
* Base de datos: Mongo Atlas
* Web App Server: NodeJS

# 2. Desarrollo

No se generó ninguna base, todo fue creado manualmente.

# 3. Diseño:

## 3.1 Modelo de datos:

```json
Location:
{
    username: String,
    latitude: String,
    longitude: String,
    hour: String,
    date: String
}
```

## 3.2 Servicios Web

/* Servicio Web: Crea un usuario en la base de datos
  Método: POST
  URI: /users/createUser
*/

/* Servicio Web: Autentica un usuario
  Método: POST
  URI: /users/authenticateUser
*/



## 3.2 Servicios Web

/* Servicio Web: Guarda una ubicación con su respectiva hora y fecha
  Método: POST
  URI: /locations/saveLocation
*/

/* Servicio Web: Busca las ubicaciones que ha guardado un usuario 
  Método: POST
  URI: /locations/searchLocation
*/

/* Servicio Web: Limpia todas las ubicaciones realizadas por un usuario. 
  Método: POST
  URI: /locations/clearLocations
*/


