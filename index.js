const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
  res.send("Welcome to chitara university bajaj!");
})

const template = {
    "is_success" : true,
    "user_id" : "ayushkumar",
    "email" : "ayush0338.be21@chitkara.edu.in",
    "roll_number":"2110990338",
    "odd_numbers": [],
    "even_numbers": [],
    "alphebets": [],
  }

app.get("/bfhl", (req, res) => {
  res.send("Welcome to BFHL endpoint");
});

app.post('/bfhl', (req, res)=>{
  const {data} = req.body;
  const response = structuredClone(template);

  try{
    for(var i=0; i<data.length; i++){
      var element = parseInt(data[i]);
      if(isNaN(element)){
        response.alphebets.push(data[i].toUpperCase());
      }else{
        if(element%2==0){
          response.even_numbers.push(element);
        }else{
          response.odd_numbers.push(element);
        }
      }
    }  
    res.json(response);
  }catch(error){
    response.is_success = false;
    res.json(response);
  }
})

app.listen(8000, () => {
  console.log('server started');
})
