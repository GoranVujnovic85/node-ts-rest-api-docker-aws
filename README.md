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


# 🏁 Useful terminal commands
- npm run migrate
- npm run migrate:undo
- npm run seed
- npm run seed:undo
- 


## 📂 Project Structure

- The_Kitchen-TYPESCRIPT/
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
- |   |   |   |-- routes/
- |   |   |   |   |-- contactMessage.routes.ts
- |   |
- |   |   |-- feedback/
- |   |   |   |-- controllers/
- |   |   |   |-- models/
- |   |   |   |-- routes/
- |   |
- |   |   |-- order/
- |   |   |   |-- controllers/
- |   |   |   |-- models/
- |   |   |   |-- routes/
- |
- |   |-- services/                                 # Services that handle the application's logic
- |   |   |-- contactMessage.service.ts
- |   |   |-- order.service.ts
- |
- |   |-- utils/                                    # Utilities for the entire project (helper functions, loggers, etc.)
- |   |   |-- database.ts                           # General functions for migrations/seeders
- |   |   |-- logger.ts
- |
- |   |-- middlewares/                              # Global middlewares (e.g., authentication)
- |   |   |-- authMiddleware.ts
- |
- |   
- |-- server.ts                                     # Main entry point
- |-- tsconfig.json                                 # TypeScript configuration file
- |-- package.json                                  # Project dependencies and scripts
- |-- package-lock.json                             # Dependency lock file
- |-- node_modules/                                 # Installed node modules (generated after npm install)