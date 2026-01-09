#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { execa } from "execa";
import chalk from "chalk";
import ora from "ora";
import validatePkgName from "validate-npm-package-name";
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
      choices: ["react", "next"],
    },
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["ts (TypeScript)", "js (JavaScript)"],
    },
    {
      type: "list",
      name: "style",
      message: "Choose styling:",
      choices: ["tailwind", "scss"],
    },
    {
      type: "list",
      name: "api",
      message: "Choose API layer:",
      choices: (answers) =>
        answers.framework === "next" ? ["axios"] : ["axios", "rtk"],
    },
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-app",
    },
  ]);

  const apiChoices =
    answers.framework === "next" ? ["axios"] : ["axios", "rtk"];

  /* ---------------- VALIDATE PROJECT NAME ---------------- */

  const validation = validatePkgName(answers.projectName);

  if (!validation.validForNewPackages) {
    console.error(chalk.red("\n❌ Invalid project name\n"));
    validation.errors?.forEach((e) => console.error(`- ${e}`));
    process.exit(1);
  }

  /* ---------------- RESOLVE TEMPLATE PATH ---------------- */

  const templatePath = path.resolve(
    __dirname,
    "../templates",
    answers.framework,
    answers.language,
    answers.style,
    apiChoices.includes(answers.api) ? answers.api : "axios"
  );

  if (!fs.existsSync(templatePath)) {
    console.error(chalk.red(`\n❌ Template not found:\n${templatePath}\n`));
    process.exit(1);
  }

  const targetPath = path.join(cwd, answers.projectName);

  /* ---------------- SAFETY CHECK ---------------- */

  if (targetPath.startsWith(templatePath)) {
    console.error(
      chalk.red("\n❌ Cannot create project inside template directory.\n")
    );
    process.exit(1);
  }

  if (fs.existsSync(targetPath)) {
    console.error(
      chalk.red(`\n❌ Folder "${answers.projectName}" already exists.\n`)
    );
    process.exit(1);
  }

  /* ---------------- COPY TEMPLATE ---------------- */

  console.log(chalk.yellow("\n📂 Creating project...\n"));
  await fs.copy(templatePath, targetPath);

  /* ---------------- INSTALL DEPENDENCIES ---------------- */

  const spinner = ora("Installing dependencies...").start();

  try {
    await execa("npm", ["install"], {
      cwd: targetPath,
      stdio: "ignore",
    });
    spinner.succeed("Dependencies installed");
  } catch (err) {
    spinner.fail("Dependency installation failed");
    process.exit(1);
  }

  /* ---------------- FINAL MESSAGE ---------------- */

  console.log(chalk.green("\n✅ Project created successfully!\n"));
  console.log("Next steps:\n");
  console.log(chalk.cyan(`  cd ${answers.projectName}`));
  console.log(chalk.cyan("  npm run dev\n"));
}

run();
