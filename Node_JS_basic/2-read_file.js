/**
 * Reads a CSV database file synchronously and logs student statistics.
 */
const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const lines = fileContent.trim().split('\n');

    // Filter out empty lines
    const validLines = lines.filter((line) => line.trim() !== '');

    if (validLines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract header and rows
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
