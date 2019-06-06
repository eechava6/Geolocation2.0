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
User:
{
    username: String,
    password: String,
    email: String
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


