const express = require('express');
const fs = require('fs');
const cors = require('cors');

let app = express();
app.use(cors());
app.use(express.json());


let allPolls = [];

fs.readFile('./mock/polls.json','utf-8', function(err, data) {
    allPolls = JSON.parse(data);
})


app.get('/listAllPolls', function(req, res) {
    res.end(JSON.stringify(allPolls));
});

app.get('/getPollDetails/:id', function(req, res) {
   const poll =  allPolls.filter((item) => {
        return item.id == req.params.id;
    });
    res.end(JSON.stringify(poll[0]));
});

app.get('/getPollsByUser/:userName', function(req, res) {
    const polls =  allPolls.filter((item) => {
         return item.creator == req.params.userName;
     });
     res.end(JSON.stringify(polls));
 });

app.post('/updateVotes', function(req, res) { 
    let output;
    for (let i = 0; i < allPolls.length; i+=1) {
        if (allPolls[i].id == req.body.id) {
            for(let j = 0; j < allPolls[i].options.length; j += 1) {
                if (allPolls[i].options[j].option == req.body.option) {
                    allPolls[i].options[j].vote += 1;
                    output = allPolls[i];
                }
            }
        }
    }

    res.end(JSON.stringify(output));
});

app.post('/createNewPoll', function(req, res) {
    let maxId = 0;
    allPolls.forEach((item) => {
        maxId = item.id > maxId ? item.id:maxId;
    })
    const obj = req.body;
    obj.id = ++maxId;
    allPolls.push(obj);
    res.end(JSON.stringify('successful'));
});

const server =  app.listen(1010, function() {
    const host = server.address().address;
    const port =  server.address().port;
    console.log('server is listening at http://'+host+':'+port);
});