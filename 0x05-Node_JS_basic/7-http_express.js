const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (field.length === 4 && field[3]) {  // Ensure valid line
              if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                students[field[3]].push(field[0]);
              } else {
                students[field[3]] = [field[0]];
              }
              fields[field[3]] = (fields[field[3]] || 0) + 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          output += `Number of students in ${key}: ${value}. `;
          output += `List: ${students[key].join(', ')}\n`;
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  if (!process.argv[2]) {
    res.send('This is the list of our students\nCannot load the database: No CSV file provided');
    return;
  }
  countStudents(process.argv[2]).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch((err) => {
    res.send(`This is the list of our students\nCannot load the database: ${err.message}`);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
