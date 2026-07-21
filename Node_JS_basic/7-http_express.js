#!/usr/bin/node
/**
 * Creates a more complex HTTP server using Express,
 * handling routing and integrating asynchronous student database reading.
 */
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (error, fileContent) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = fileContent.trim().split('\n');
    const validLines = lines.filter((line) => line.trim() !== '');

    if (validLines.length <= 1) {
      resolve('Number of students: 0');
      return;
    }

    const rows = validLines.slice(1);
    let output = `Number of students: ${rows.length}`;

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

    for (const [field, students] of Object.entries(fields)) {
      output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
    }

    resolve(output);
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students';
  try {
    const studentOutput = await countStudents(databaseFile);
    responseText += `\n${studentOutput}`;
    res.send(responseText);
  } catch (error) {
    res.send(`${responseText}\nCannot load the database`);
  }
});

app.listen(port);

module.exports = app;
