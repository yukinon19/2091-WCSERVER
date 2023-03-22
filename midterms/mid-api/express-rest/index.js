const express = require('express'); 
const app = express();

//home
app.get('/', (req, res) => { 
    res.send('My New App!'); 
});

//api for heroes
app.get('/api/heroes', (req, res) => {
     res.send(['Superman', 'Iron Man', 'Batman', 'Spiderman', 'Hulk' , 'Wonder Woman']); 
});

app.get('/api/heroes/:id', (req, res) => { 
    res.send(req.params.id);
});

app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

//http local host 3000
app.listen(3000, () => console.log('Listening on port 3000'));