# 📚 Project: "The_Kitchen (node-ts-rest-api-docker-aws)" backend for food ordering system 


## 📖 Description: The_Kitchen-Typescript is a RESTful API backend for an online food ordering platform. The project is built using Node.js and written in TypeScript, ensuring type    safety and maintainability. The backend is structured using MVC architecture and follows best practices for scalable and efficient development. It utilizes Sequelize ORM for database interactions, connecting to a MySQL database. The application is containerized with Docker, allowing for easy deployment and scalability. The plan is to deploy the project on AWS Cloud, leveraging cloud services for hosting, database management, and application scaling.


## 🚧 Project status
- Current status: Project in development!📜


## 🛠️ Technologies 
- VS Code 💻
- Typescript ⚡
- Sequelize 🔌
- Node.js 🌐
- Express.js 🚀
- MySQL 🗄️
- Docker 🐳
- Postman 🌩️

## 📜 License
- MIT License ⚖️


## 🤝 Contributes
- They are welcome! 🙌


## 📂 Project Structure

- node-ts-rest-api-docker-aws/
- |
- |-- src/
- |   |-- config/                                   # Base configuration, env variables, etc.
- |   |   |-- database.ts
- |
- |   |-- database/                                 # Centralized place for migrations and seeders
- |   |   |-- migrations/                           # All SQL migration files
- |   |   |-- seeders/                              # All seeder files
- |
- |   |-- modules/                                  # Module per resource (Feature-Based Organization)
- |   |   |-- contactMessage/
- |   |   |   |-- controllers/
- |   |   |   |   |-- contactMessage.controller.ts
- |   |   |   |-- models/
- |   |   |   |   |-- contactMessage.model.ts
- |
- |   |-- routes/                                   # Routes organized by access level
- |   |   |-- private/
- |   |   |   |-- order.routes.ts
- |   |   |   |-- user.routes.ts
- |   |   |-- public/
- |   |   |   |-- contactMessage.routes.ts
- |   |   |   |-- feedback.routes.ts
- |
- |   |-- utils/                                    # Utilities for the entire project
- |   |   |-- database.ts                           # General functions for migrations/seeders
- |   |   |-- logger.ts
- |   |   |-- migrate.ts                            # Script for running migrations
- |   |   |-- responseHandler.ts                    # Standardized response handler
- |   |   |-- seed.ts                               # Script for seeding the database
- |
- |   |-- middlewares/                              # Global middlewares
- |   |   |-- authMiddleware.ts                     # Middleware for authentication
- |   |   |-- passport.ts                           # Passport.js configuration
- |   |   |-- roleMiddleware.ts                     # Middleware for role-based access control
- |
- |   |-- server.ts                                 # Main entry point
- |
- |-- tsconfig.json                                 # TypeScript configuration file
- |-- package.json                                  # Project dependencies and scripts
- |-- package-lock.json                             # Dependency lock file
- |-- docker-compose.yml                            # Docker Compose configuration file 
- |-- Dockerfile                                    # Dockerfile for building the app 


# 🏁 Useful terminal commands
   -  npm run migrate
   -  npm run migrate:undo
   -  npm run seed
   -  npm run seed:undo



 - 🌊🌊🌊 🐳 D O C K E R 🐳 🌊🌊🌊

    -    💨 docker info

    -    💨 docker-machine start default

    -    💨 eval $(docker-machine env default) --> set environment variables that allow you to communicate with the Docker machine called "default"

    -    💨 docker-compose up --build

    -    💨 docker-compose up -d

    -    💨 docker-compose down

    -    💨 docker stop docker-project-db-container --> stop the existing container

    -    💨 docker rm docker-project-db-container ---> delete the existing container

    -    💨 docker-compose down && docker-compose up -d ---> reset mysql and backend

    -    💨 docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' docker-project-db-container ---> The IP address may change when you restart cont.

    -    💨 docker ps  
    
    -    💨 docker exec -it kitchen-backend-container bash ----> with this command you enter the docker container ----> inside the docker container you start migr.
    
    -    💨 docker exec -it kitchen-db-container mysql -u root -p --> 
    
    -    💨 docker-compose exec docker-project-db mysql -u root -proot -e "SHOW TABLES;" the_kitchen
    
    -    💨 docker-compose exec docker-project-db mysql -u root -proot -e "SELECT * FROM Orders;" the_kitchen
    
    -    💨 SHOW DATABASES;
    
    -    💨 USE the_kitchen;
    
    -    💨 SHOW TABLES;

    -    💨 SELECT id, username, email, role FROM Users; ---> With this command I will see the users in the table
    
    -    💨 exit
    
-    🌊🌊🌊 📦 📦 📦 📦 📦 📦 🌊🌊🌊
    


 