const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(cors());

app.post('/api/appointments/create', (req, res) => {
    const appointmentInfo = req.body;
    console.log(appointmentInfo.techId);
    if (appointmentInfo.techId && appointmentInfo.timeOfAppt && appointmentInfo.Notes){
        knex('appointments')
          .insert({
              "techId": appointmentInfo.techId,
              "timeOfAppt": appointmentInfo.timeOfAppt,
              "Notes": appointmentInfo.Notes
          }).returning('*')
          .then(data => res.status(200).json(data))
          .catch(err => res.status(400).json({message: `Error at ${err}`}))
          .then(console.log('Done'))
    } else {
        console.log('error');
    }
});

//Get Job information
app.get('/api/appointments/:jobId', (req, res) => {
    const jobId = req.params.jobId
    knex('appointments')
        .select('*')
        .from('appointments')
        .where({ jobId: jobId })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: `Error at ${err}`}))
})

//POST request to update a job
app.put('/api/appointments/:jobId/update', (req, res) => {
    const updates = req.body;
    const jobId = req.params.jobId
    knex('appointments')
        .select('Notes')
        .from('appointments')
        .where({ jobId: jobId })
        .then( (data) => {
            const oldNotes = data[0].Notes;
            knex('appointments')
            .from('appointments')
            .where({ jobId: jobId })
            .update({ Notes: oldNotes + " update: " + updates.Notes })
            .returning('*')
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json({message: `Error at ${err}`}))
        })
})

//DELETE request to delete a job
app.delete('/api/appointments/:jobId/delete', (req, res) => {
    const jobId = req.params.jobId;
    knex('appointments')
        .select('Notes')
        .from('appointments')
        .where({ jobId: jobId })
        .del()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({message: `Error at ${err}`}))
})

app.listen(port, () => console.log(`Server up and running @ localhost:${port}`))

