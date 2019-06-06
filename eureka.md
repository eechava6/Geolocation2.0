# Eureka service

# 1. Análisis

## 1.1 Funcionalidades:

1. Registrar microservicios.
2. Realizar chequeos de vida de microservicios
3. Identificar VPC y zonas por cada microservicio. 
4. Manejo de replicaciones 
5. Borrado de microservicios. 
6. Descrubimiento de microservicios

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:

* Lenguaje de Programación: Java 12
* Framework: Spring boot
* Compilación: Maven


# 2. Desarrollo

Se utiliza el servicio de Eureka de Netflix con spring boot. 

# 3. Diseño:

## 3.1 Modelo de datos:

```json
instance: {
      app: name,
      hostName: hostname,
      ipAddr: host ip address,
      statusPageUrl: statusURL,
      vipAddress: vipaddress,
      port: {
        $: PORT,
        '@enabled': 'true',
      },
      dataCenterInfo: {
        '@class': datacenterinfo,
        name: dataCenter,
      },
      registerWithEureka: true,
      fetchRegistry: true,
    }
```

```json
    eureka: {
    
      host:host,
      port: port,
      servicePath: '/eureka/apps/',
    },
```

