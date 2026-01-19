# Stopping Game API

A NestJS-based API for the Stopping Game research project. This application provides endpoints to manage game sessions, user data, and process datasets related to stopping experiments.

## Requirements

Ensure you have the following installed on your local machine:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **SQLite** (for local development database, though Prisma manages the connection mostly)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd Stopping-game-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

The application requires an environment configuration file to run.

1. **Create the `.env` file**:
   Copy the example configuration file to create your local `.env`.
   ```bash
   cp .env.example .env
   ```
   
   > **Note**: The `.env` file is git-ignored to protect sensitive secrets.

2. **Verify Configuration**:
   Open `.env` and ensure `DATABASE_URL` points to your local SQLite file (default is `file:./dev.db`). You can adjust `APP_PORT` and other settings as needed.

## Database Setup

This project uses [Prisma](https://www.prisma.io/) with an SQLite database.

1. **Run Migrations**:
   Initialize the database and apply the schema migrations.
   ```bash
   npx prisma migrate dev
   ```

2. **Generate Client**:
   Ensure the Prisma client is generated (usually happens automatically after migration).
   ```bash
   npx prisma generate
   ```

## Data Files

The application relies on specific data files that are **not** committed to the repository (except for sample data if applicable).

### 1. Data Directory
You must create a `data` folder in the project root. This folder should contain the CSV datasets used by the game.

- **Location**: `Stopping-game-api/data/`
- **Content**: `.csv` files containing game series data.

### 2. Series Registry
A registry file is required to map datasets to ID and metadata.

- **Location**: `src/series_registry.csv`
- **Format**: CSV with columns `id`, `dataset`, `method`, `method_confidence_level`, `method_bias`, `method_recall_target`, `filename`, `row_count`.

> **Important**: Ensure the `filename` in `series_registry.csv` exactly matches the files present in your `data/` directory.

## Running the Application

### Development
To run the application in development mode with hot-reload:

```bash
npm run start:dev
```
The server will start on `http://localhost:4000` (or the port specified in `.env`).

### Production
To build and run for production:

```bash
npm run build
npm run start:prod
```

## Project Structure

- `src/`: Application source code (NestJS modules, services, controllers).
- `prisma/`: Database schema and migration history.
- `data/`: (Ignored by Git) Folder for CSV datasets.
- `.env`: (Ignored by Git) Environment variables.

For more details on the NestJS framework, see [README_NESTJS.md](./README_NESTJS.md).
