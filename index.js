import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Logger
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/contact', (req, res) => {
  res.send(req.body);
});


// Listener
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});