#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

async function run() {
  console.log(chalk.blue("\n🚀 Create Frontend Boilerplate\n"));

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Choose framework:",
      choices: ["react", "next"]
    },
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["ts", "js"]
    },
    {
      type: "list",
      name: "style",
      message: "Choose styling:",
      choices: ["tailwind", "scss"]
    },
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-app"
    }
  ]);

  const templatePath = path.resolve(
    __dirname,
    "../templates",
    answers.framework,
    answers.language,
    answers.style,
    "axios"
  );

  console.log("Using template path:", templatePath);

  if (!fs.existsSync(templatePath)) {
    console.error(
      chalk.red("\n❌ Template not found. Please check templates folder.\n")
    );
    process.exit(1);
  }

  const targetPath = path.join(cwd, answers.projectName);

  await fs.copy(templatePath, targetPath);

  console.log(chalk.yellow("\n📦 Installing dependencies...\n"));

  await execa("npm", ["install"], {
    cwd: targetPath,
    stdio: "inherit"
  });

  console.log(chalk.green("\n✅ Done!\n"));
  console.log(`cd ${answers.projectName}`);
  console.log("npm run dev");
}

run();
