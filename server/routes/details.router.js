// query search should be something like `SELECT * FROM movies WHERE id = 5;`
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('in detail router:', req.body);
    let id = req.params.id;
    let queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
    pool.query(queryText, [id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting that movie', error)
            res.sendStatus(500);
        })
})

router.put('/:id', (req, res) => {
    let values = [req.body.id, req.body.title, req.body.description ]
    let queryText = `UPDATE UPDATE movies 
    SET title = $2 ,
    description = $3
    WHERE id= $1;`;
    pool.query(queryText, [values])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting that movie', error)
            res.sendStatus(500);
        })
})

module.exports = router;