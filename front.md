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
* Framework web frontend: Bootstrap
* Base de datos: Mongo Atlas
* Web App Server: NodeJS

# 2. Desarrollo

No se generó ninguna base, todo fue creado manualmente.

# 3. Diseño:

## 3.1 Modelo de datos:

Funciona como un wrapper para los microservicios que usan datos. 

## 3.2 Servicios Web

/* Servicio Web: Crea un usuario en la base de datos
  Método: POST
  URI: /users/createUser
*/

/* Servicio Web: Autentica un usuario
  Método: POST
  URI: /users/authenticateUser
*/

/* Servicio Web: Guarda una ubicación con su respectiva hora y fecha
  Método: POST
  URI: /locations/saveLocation
*/

/* Servicio Web: Busca las ubicaciones que ha guardado un usuario 
  Método: GET
  URI: /locations/authenticateUser
*/

/* Servicio Web: Busca las ubicaciones que ha guardado un usuario 
  Método: GET
  URI: /locations/searchLocation
*/

/* Servicio Web: Busca las ubicaciones que ha guardado un usuario 
  Método: GET
  URI: /locations/registerUser
*/

