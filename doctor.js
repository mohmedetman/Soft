const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected.');
}).catch((err) => {
  console.log('Error connecting to database:', err);
});
const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subjects: [{ type: String }]
  });
  const Doctor = mongoose.model('Doctor', doctorSchema);
  app.post('/doctors', async (req, res) => {
    try {
      const { name, email, password, subjects } = req.body;
      const encryptedPassword = await bcrypt.hash(password, 10);
      const doctor = new Doctor({ name, email, password: encryptedPassword, subjects });
      await doctor.save();
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.patch('/doctors/:id/subjects', async (req, res) => {
    try {
      const { id } = req.params;
      const { subjects } = req.body;
      await Doctor.findByIdAndUpdate(id, { subjects });
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  app.listen(3000, () => {
    console.log('Server started on port 3000.');
  });