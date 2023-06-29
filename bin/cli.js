#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}\n`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = "";
const installDepsCommand = `cd ${repoName} \n npm install or npm i`;

console.log(`Cloning the repository with name ${repoName}`);

const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exitCode(-1);

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);

if (!installDeps) process.exitCode(-1);

console.log("Congratulations! You are ready. Follow the following commands to start");
console.log(`cd ${repoName} \n npm run dev`);
