# Project Overview

This project, "taskhub," is a task management system designed for assigning and competing for tasks. It consists of a Java Spring Boot backend and a PostgreSQL database. The project is structured into three main directories: `backend`, `database`, and `web`.

## Backend

The backend is a Spring Boot application built with Maven. It uses Java 17 and the Spring Web MVC framework. The `pom.xml` file indicates a dependency on the PostgreSQL driver, connecting the application to the database.

## Database

The project uses a PostgreSQL database, managed with Docker Compose. The `database/docker-compose.yml` file defines the database service, including the image, container name, and credentials. The database schema is managed through migration files located in the `database/migrations` directory. These migrations are applied using the `migrate` tool.

## Web

The `web` directory is currently empty, suggesting that the frontend of the application has not yet been developed.

# Building and Running

## Database

To start the PostgreSQL database, run the following command from the `database` directory:

```bash
docker compose up -d
```

To apply the database migrations, you can use the `migrate` tool. The `database/README.md` file provides instructions on how to use it. For example, to apply all "up" migrations, you would run a command like this:

```bash
migrate -path migrations -database "postgres://taskhub:taskhub@localhost:5432/taskhub?sslmode=disable" up
```

## Backend

To build and run the backend, you can use the Maven wrapper provided in the `backend/taskhub` directory.

To build the project, run the following command from the `backend/taskhub` directory:

```bash
./mvnw clean install
```

To run the application, you can use the following command:

```bash
./mvnw spring-boot:run
```

# Development Conventions

*   **Database Migrations:** The project uses a sequential numbering system for database migrations (e.g., `000001_users.up.sql`). Each migration has a corresponding "down" script to revert the changes.
*   **Soft Deletes:** The `users` table uses a soft-delete pattern, with an `is_deleted` flag and a `deleted_at` timestamp. A database trigger is used to automatically manage these fields.
*   **Code Style:** While there are no explicit style guidelines in the provided files, the Java code in `DemoApplication.java` follows standard Java conventions.
