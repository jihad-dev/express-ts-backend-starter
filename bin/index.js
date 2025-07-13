#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ প্রজেক্টের নাম দিন: npx express-ts-backend-starter my-api");
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);
execSync(`cp -r ${__dirname}/../template ${targetPath}`);

console.log(`✅ প্রজেক্ট '${projectName}' সফলভাবে তৈরি হয়েছে!`);
console.log(`👉 cd ${projectName}`);
console.log(`👉 npm install`);
console.log(`👉 npm run dev`);
