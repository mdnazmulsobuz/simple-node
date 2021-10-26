const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get ('/', (req, res)=>{
    res.send ('Hello from Node! I love node. WoW.....Yes');
});

const users = [
    {id:1, name: 'sabana', email: 'sobuz287@gmail.com', phone: '01812975158'},
    {id:2, name: 'Alamgir', email: 'nsobuz287@gmail.com', phone: '01-912975158'},
    {id:3, name: 'Rubel', email: '6564@gmail.com', phone: '01912975158'},
    {id:4, name: 'Sabnur', email: 'sobuz7@gmail.com', phone: '019512975158'},
    {id:5, name: 'popy', email: 'sdfd287@gmail.com', phone: '018623212975158'}
]
app.get('/users',(req, res)=>{
    const search = req.query.search;
    // use query parametr 
    if (search){
        const searchResult  = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    } 
})

// app method 
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post', req.body)
    res.json(newUser);
})


// Dynamic api
app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res)=>{
    res.send(['mango, oranges, banana, apple '])
})
app.get('/fruits/mango/fazli', (req, res)=>{
    res.send('Yummy Yammy mango');
})

app.listen(port, ()=>{
    console.log('listening port', port);
});