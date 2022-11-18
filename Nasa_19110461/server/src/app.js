const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const request = require('supertest');
const api = require('./routes/api')
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
/*
//#region endpoint planets
request(app)
  .get('/planets')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
//#endregion

//#region endpoit launches
request(app)
  .get('/launches')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

request(app)
.post('/launches')
.send({
  mission: "ZTM155",
  rocket: "ZTM Experimental IS1",
  target: "Kepler-186 f",
  launchDate: "January 17,2030"
})
.set('Accept', 'application/json')
.expect('Content-Type', /json/)
.expect(201)
.end(function(err, res) {
  if (err) throw err;
});

request(app)
  .delete(`/launches/${101}`)
  // .send({ id: '101' })
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
//#endregion

*/
module.exports = app;
