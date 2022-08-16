
##Comandos Docker

docker build -t acabret/ts-api-node:1.5 .
docker run -p 4001:8080 acabret/ts-api-node:1.5

docker pull postgres
docker run --name postgresDummyDB -e POSTGRES_USER=masteradmin -e POSTGRES_PASSWORD=masterpass -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres

docker compose up