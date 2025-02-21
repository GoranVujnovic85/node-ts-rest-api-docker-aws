import sequelize from "../config/database";
import * as fs from "fs";
import * as path from "path";

const migrationsPath = path.join(__dirname, "../database/migrations");

const runMigrations = async () => {
  try {
    console.log("Running all migrations...");
    const queryInterface = sequelize.getQueryInterface();
    
    const migrationFiles = fs.readdirSync(migrationsPath);

    for (const file of migrationFiles) {
      const migration = require(path.join(migrationsPath, file)).default;

      if (migration.up) {
        await migration.up(queryInterface);
        console.log(`Migration ${file} applied.`);
      } else {
        console.warn(`Skipping ${file} (no up() function found).`);
      }
    }

    console.log("All migrations applied successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await sequelize.close();
  }
};

const undoMigrations = async () => {
  try {
    console.log("Undoing all migrations...");
    const queryInterface = sequelize.getQueryInterface();

    const migrationFiles = fs.readdirSync(migrationsPath).reverse();

    for (const file of migrationFiles) {
      const migration = require(path.join(migrationsPath, file)).default;

      if (migration.down) {
        await migration.down(queryInterface);
        console.log(`Migration ${file} undone.`);
      } else {
        console.warn(`Skipping ${file} (no down() function found).`);
      }
    }

    console.log("All migrations undone successfully!");
  } catch (error) {
    console.error("Undo failed:", error);
  } finally {
    await sequelize.close();
  }
};

// Argumenti iz komandne linije
const action = process.argv[2];

if (action === "up") {
  runMigrations();
} else if (action === "down") {
  undoMigrations();
} else {
  console.error('Invalid argument! Use "up" to apply migrations or "down" to undo them.');
  process.exit(1);
}