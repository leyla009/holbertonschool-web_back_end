/**
 * Reads a CSV database file asynchronously and logs student statistics using a Promise.
 */
const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (error, fileContent) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = fileContent.trim().split('\n');
    const validLines = lines.filter((line) => line.trim() !== '');

    if (validLines.length <= 1) {
      console.log('Number of students: 0');
      resolve();
      return;
    }

    const rows = validLines.slice(1);
    console.log(`Number of students: ${rows.length}`);

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
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    resolve();
  });
});

module.exports = countStudents;
