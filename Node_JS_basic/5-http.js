#!/usr/bin/node
/**
 * Creates a more complex HTTP server using Node's http module,
 * handling different routes and integrating student database reading.
 */
const http = require('http');
const fs = require('fs');

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentOutput = await countStudents(databaseFile);
      res.end(studentOutput);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
