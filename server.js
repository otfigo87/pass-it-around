const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req,res) => {
    res.send("<h1>99 Bottles of Beer on the wall</h1>" + 
    "<a href='/98'>Take one down, pass it around</a>")
})

app.get('/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles > 0){
      res.send(
        `<h1>${req.params.number_of_bottles} Bottles of Beer on the wall</h1>
      <a href='/${
        req.params.number_of_bottles - 1
      }'>Take one down, pass it around</a>`
      )} else {
        res.send(`<h1>${req.params.number_of_bottles} Bottles of Beer on the wall</h1> <a href="/">Start Over</a>`)
      };
})

app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})