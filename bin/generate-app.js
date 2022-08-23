#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx create-my-boilerplate my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/SergioCikilot/sego-starter-kit-f-ts.git";

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log("Downloading files...");
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("Installing dependencies...");
    execSync("npm install");

    console.log("Removing useless files");
    execSync("npx rimraf ./.git");
    fs.rmSync(path.join(projectPath, "bin"), { recursive: true });

    console.log(" ");
    console.log("The installation is done dawg");
    console.log(" ");
    console.log("MY NAME IS SERGIO");
    console.log("------------------------------");
    console.log("BUT");
    console.log("------------------------------");
    console.log("EVERYBODY CALLS ME SEGO");
    console.log("------------------------------");
    console.log("(︻╦╤─ - - -");
    console.log("  ");
  } catch (error) {
    console.log(error);
  }
}
main();
