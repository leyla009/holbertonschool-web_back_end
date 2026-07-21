#!/usr/bin/node
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2];
    try {
      const studentsByField = await readDatabase(databaseFile);
      let responseText = 'This is the list of our students';

      const sortedFields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        const students = studentsByField[field];
        responseText += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      });

      res.status(200).send(responseText);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(databaseFile);
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
