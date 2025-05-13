// filepath: mini-food-ordering-app/mini-food-ordering-app/scripts/reset-project.js
const fs = require('fs');
const path = require('path');

const resetProject = () => {
  const directoriesToDelete = [
    path.join(__dirname, '../src/components'),
    path.join(__dirname, '../src/screens'),
    path.join(__dirname, '../src/services'),
    path.join(__dirname, '../src/navigation'),
    path.join(__dirname, '../assets/fonts'),
  ];

  directoriesToDelete.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmdirSync(dir, { recursive: true });
      console.log(`Deleted directory: ${dir}`);
    }
  });

  console.log('Project has been reset successfully.');
};

resetProject();