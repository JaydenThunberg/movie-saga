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

// router.put('/:id', (req, res) => {
//     let id = req.body.id;
//     let title = req.body.title  ;
//     let description = req.body.description; 
//     let queryText = ``;
//     pool.query(queryText, [id])
//         .then(result => {
//             res.send(result.rows);
//         })
//         .catch(error => {
//             console.log('error getting that movie', error)
//             res.sendStatus(500);
//         })
// })

module.exports = router;