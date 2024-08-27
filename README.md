To build and run the Docker image, follow these steps:

    Note: Ensure that your Node.js server and MongoDB server are running.

    Build the Docker image: Open a terminal or command prompt window, navigate to the Dockerfile's directory, and run the command docker build -t your-image-name . (Don't forget the . at the end). This command will build and tag the Docker image with the specified name.

    The docker-compose.yml has been created to run two containers, one for Mongo and the other for the Node app. Run the following command to run the server:

    1

    docker-compose up

    Run the Docker container: After building the image, you can run the container using the command docker run -p 3000:3000 -d your-image-name command. This action will start the container in detached mode and map port 3000 of the container to port 3000 of the host machine.

You should now be able to access your Node.js application running inside the Docker container at http://localhost:3000. The MongoDB server also runs inside the container and can be accessed from the Node.js application using the MONGO_HOST environment variable.

Remember to replace 'your-image-name' with the name for your Docker image.