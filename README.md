# IP-WEEK-2 - Containerization with Docker

In this project we will use deployment files to build and run the containers on GKE to make the web app run on our browser   
Build a basic microservice to run the app  

Description  
This is a Configuration Management using Kubernetes on GKE  
Below is the link to the deployment    
http://34.168.38.163:3000/
  
### 1. Created four deployment yaml files as below  
    * mongo-config.yaml - This is to set up the mongo database endpoint configMap and expose it to the  service file  
    * mongo-secret - this is to configure mongodb username and password  
    * mongo.yaml - config file for deploying a mongodb app with its service (internal service)  
    * frontend.yaml - config file for deploying the app with external service usind LoadBalancer  
    
### 2. Docker-compose
    * Updated the docker compose file to include environment variables to expect values from a secret file 
    * Docker Images Built and Uploaded : jnkiarie/backend-image:v1.0.1 and jnkiarie/client-image:v1.0.1

### 3. Commands Used  
    * gcloud container clusters create moringa-cluster- this is to create a cluster to manage the pods   
    * kubectl apply -f mongo-config.yaml  
    * kubectl apply -f mongo-secret.yaml  
    * kubectl apply -f mongo.yaml  
    * kubectl apply -f frontend.yaml  
    * kubectl describe pod (pod name) to see the configurations of a certain pod  
    * kubectl get all - to display all the services, deployments and replicas created  
    * kubectl get node -o wide - Get all nodes and the respective IP addresses  
    * kubectl get secret  
    * kubectl get pod  
    * kubectl logs <name of the pod>
    
Technologies Tested  
MongoDB  
Dockerfile   
Docker-Compose  
Kubernetes  

Support and contact details  
jimmyn.kiarie@gmail.com  

License  
GNU General Public License v3.0  

Contributor  
Jimmy Njuguna Kiarie  