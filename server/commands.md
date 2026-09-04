#build the server image
docker build -t graphflow-server .

#run the server image
docker run -p 3000:3000 graphflow-server