import express from 'express';
import cors from 'cors'; //we need to import cors because 2 machines can't talk to each other, its like this is the handshaked for the connection
import {router as proceduresRouter} from './routes/procedures';

const app = express(); //creating a vessel to store data
app.use(cors()); //to enable to cors on the server, to have cross origin support
app.use(express.json()); //to come back to us in a particular lanugage we want which is json, it parses the json bodies
app.use('/procedures', proceduresRouter);

// Test API to check MySQL connection
// import { db } from './db';
// app.get('/test-db', (req, res) => {
//   db.query('SELECT 1 AS test', (err: any, results: any) => {
//     if (err) {
//       return res.status(500).json({ success: false, error: err.message });
//     }
//     res.json({ success: true, results });
//   });
// });

//were about to create a route to get or whatever from the server

app.listen(5000, () => {
    console.log('Server is running on port 5000, Trick!') //tells express to listen to port
});