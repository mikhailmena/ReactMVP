const express = require('express');
const app = express()
const{Pool} = require('pg');
const fs = require('fs');
app.use(express.json());
const cors = require('cors');
const { Client } = require('pg');
app.use(cors({ origin: '*' }));
const PORT = 8080;
// const config = require("./Config.json")
// const client = new Client({
//     connectionString: config.connectrionString,})
    
// client.connect()


const pool = new Pool({
    user: 'postgres',
    password:'docker',
    host: 'localhost',
    port: 5432,
    database: 'jobs'
})

//READ//////
app.get('/api', (req, res) => {
   pool.query('SELECT * FROM jobprospects;').then((result) => {
    res.setHeader('Content-Type', 'application/json');
       console.log(result.rows)
       res.send(result.rows);  
    })
})
//POST//////
app.post('/push', (req, res) => {
    try {
        pool.query('INSERT INTO jobprospects (jobtitle,jobdescription, POC) VALUES ($1,$2,$3) RETURNING *;', 
        [req.body.jobtitle, req.body.jobdescription, req.body.poc])
        .then((result) => {
            res.status(200, "push working");
            res.send(result.rows);

        }); 
    } catch (error) {
        console.error(error)
    }
    
})
//DELETE/////
app.delete('/delete:id', (req, res) => {
    try{
        pool.query('DELETE FROM jobprospects WHERE id = ($1);', [req.params.id])
        .then((result) => {
            res.status(300 , "row deleted");
            res.send(result.rows)
        })
    }catch (error) {
        console.error(error)
    }
    })

app.listen(PORT, () =>{
    console.log('Listening on port: ', PORT)
})

