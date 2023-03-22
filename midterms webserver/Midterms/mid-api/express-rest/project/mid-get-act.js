const express = require('express');

const app = express();

const movies = [{
    id: 1, 
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3, 
    title: 'Iron Man'
}
];


app.get('/', (req, res) => { 
    res.send('My New App!'); 
});


app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.get('/api/movies/:searchParam', (req, res) => {
    const searchParam = req.params.searchParam;
    const movie = movies.find(m => m.id === parseInt(searchParam) || m.title.toLowerCase().includes(searchParam.toLowerCase()));
    if (!movie) return res.status(404).send('The movie with the given ID or title was not found.');
    res.send(movie);
  });

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});


app.listen(4000, () => console.log('Listening on port 4000'));