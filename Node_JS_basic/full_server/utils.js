#!/usr/bin/node
import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (error, fileContent) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = fileContent.trim().split('\n');
    const validLines = lines.filter((line) => line.trim() !== '');

    if (validLines.length <= 1) {
      resolve({});
      return;
    }

    const rows = validLines.slice(1);
    const fields = {};

    rows.forEach((row) => {
      const studentData = row.split(',');
      const firstname = studentData[0];
      const field = studentData[3];

      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    resolve(fields);
  });
});

export default readDatabase;
