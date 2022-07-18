### 1. Created four deployment yaml files as below  
    * mongo-config.yaml - This is to set up the mongo database endpoint configMap and expose it to the  service file  
    * mongo-secret - this is to configure mongodb username and password  
    * mongo.yaml - config file for deploying a mongodb app with its service (internal service)  
    * frontend.yaml - config file for deploying the app with external service usind LoadBalancer  
    

### 2. Docker-compose
    * Updated the docker compose file to include environment variables to expect values from a secret file 
    * Docker Images Built and Uploaded : jnkiarie/backend-image:v1.0.1 and jnkiarie/client-image:v1.0.1


