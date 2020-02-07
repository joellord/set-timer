#!/usr/bin/env node
const { spawn } = require("child_process");
const path = require("path");

const args = process.argv.splice(2);

const helpArguments = ["help", "-h", "--help", "?", "-?"];

if (helpArguments.find(a => a === args[0])) {
    process.stdout.write("\n");
    process.stdout.write("\u001b[36mset-timer\u001b[0m\n");
    process.stdout.write("---------\n");
    process.stdout.write("A CLI tool to remind you to get back to work. By Joel Lord <joelphy@gmail.com>.\n\n");
    process.stdout.write("\u001b[1mUsage\u001b[0m\n");
    process.stdout.write("  set-timer <message> <minutes>\n\n");
    process.stdout.write("  \u001b[33mmessage\u001b[0m: Set the message to be displayed (use double quotes to specify a string)\n");
    process.stdout.write("  \u001b[33mminutes\u001b[0m: In how many minutes do you want this notification.");
    process.stdout.write("\n\n");
    process.exit(0);
}

const message = args[0] || "You have set a reminder.";
const minutes = parseInt(args[1]) || 5;
  
console.log(`⏳  Ok, I will display "${message}" in ${minutes} minutes`);

  const childProc = spawn(process.argv[0], [path.join(__dirname, "notifier.js"), message, minutes], {
      detached: true,
      stdio: "ignore"
  });

  childProc.unref();