const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//basic GET route for movieList
router.get('/', (req, res) => {
    console.log('in GET movies')
    const queryText= `SELECT * FROM movies
    JOIN movie_genre ON movies.id = movie_genre.movies_id
    JOIN genres ON movie_genre.genres_id = genres.id
    ORDER BY movies.title ASC;`;
    pool.query(queryText)
    .then((result) => {
      console.log('in GET movies', result.rows)
      res.send(result.rows);
    }) .catch( (error ) =>{
      console.log(error)
      alert('error getting movies');
      res.sendStatus(500);
    })
  });

  router.put('/:id', (req, res) => {
    // let values = [req.body.id, req.body.title, req.body.description ];
    let queryText = `UPDATE "movies" 
    SET title = $2 ,
    description = $3
    WHERE id= $1;`;
    pool.query(queryText, [req.body.id, req.body.title, req.body.description])
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting that movie', error)
            res.sendStatus(500);
        })
})

module.exports = router;