import sequelize from "../config/database";
import * as fs from "fs";
import * as path from "path";

const seedersPath = path.join(__dirname, "../database/seeders");

const runSeeders = async () => {
  try {
    console.log("Running all seeders...");
    const queryInterface = sequelize.getQueryInterface();
    
    const seederFiles = fs.readdirSync(seedersPath);

    for (const file of seederFiles) {
      const seeder = require(path.join(seedersPath, file)).default;

      if (seeder.up) {
        await seeder.up(queryInterface);
        console.log(`Seeder ${file} applied.`);
      } else {
        console.warn(`Skipping ${file} (no up() function found).`);
      }
    }

    console.log("All seeders applied successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await sequelize.close();
  }
};

const undoSeeders = async () => {
  try {
    console.log("Undoing all seeders...");
    const queryInterface = sequelize.getQueryInterface();

    const seederFiles = fs.readdirSync(seedersPath).reverse();

    for (const file of seederFiles) {
      const seeder = require(path.join(seedersPath, file)).default;

      if (seeder.down) {
        await seeder.down(queryInterface);
        console.log(`Seeder ${file} undone.`);
      } else {
        console.warn(`Skipping ${file} (no down() function found).`);
      }
    }

    console.log("All seeders undone successfully!");
  } catch (error) {
    console.error("Undo seed failed:", error);
  } finally {
    await sequelize.close();
  }
};

// Argument iz komandne linije
const action = process.argv[2];

if (action === "up") {
  runSeeders();
} else if (action === "down") {
  undoSeeders();
} else {
  console.error('Invalid argument! Use "up" to seed or "down" to undo seed.');
  process.exit(1);
}