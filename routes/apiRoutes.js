const fs = require('fs');
const path = require('path');
const dbFile = path.join(__dirname, '../db.json');

module.exports = (app) => {
  // GET /api/notes - Read and return all saved notes as JSON
  app.get('/api/notes', (req, res) => {
    fs.readFile(dbFile, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

  // POST /api/notes - Receive a new note, add it to the db.json file, and return the new note
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    fs.readFile(dbFile, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        const notes = JSON.parse(data);
        // Generate a unique id (you can use an npm package like 'uuid')
        newNote.id = generateUniqueId(); // Implement this function
        notes.push(newNote);
        fs.writeFile(dbFile, JSON.stringify(notes, null, 2), (err) => {
          if (err) {
            res.status(500).json({ error: 'Internal server error' });
          } else {
            res.json(newNote);
          }
        });
      }
    });
  });

  // Implement a function to generate a unique ID for notes
  function generateUniqueId() {
    // Use an npm package like 'uuid' to generate a unique ID
    // Example: return require('uuid').v4();
  }
};