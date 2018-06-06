const express =require('express');
const Sequelize = require('sequelize');
//const dotenv = require ('dorenv');
//dotenv.load();
const bodyParser = require('body-parser')
const app =express();
const sequelize = new Sequelize('postgres://postgres@localhost:5432/blog')











sequelize
    .authenticate()
    .then (()=> {
        console.log('successfully connected');
    })
    .catch(err=> {
        console.log('unable to connect: '+err);
    });

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
});
    
/*User.sync().then(()=>{
    User.create({
        username: 'jimmy',
        password: 'bananapancake',
    })
});*/

app.get('/', (req, res)=> {
    User.findAll().then(users=> {
        res.json(users);
    })
})

app.get('/getthree',(req,res)=>{
    User.findAndCount({
        limit: 3
    }).then(users => {
        res.json(users);
    })
})
app.post('/create',(req, res)=> {
    User.create({
        username: req.body.username,
        pasword: req.body.password,
    });
});
app.post('/update', (req,res)=> {
    User.update ({
        'password': req.body.password,
    }, {
        where: {
            username: req.body.username,
        }
    }).then(user=> {
        res.json({'success': true});
    })
    });
app.post('/delete', (rew, res) =>{
    User.destroy({
        where: {
            username: req.body.username,
        }
    }).then(user=> {
        res.json({'success': true});
    })
});

app.listen(3000,()=> {
    console.log('listening on port 3000');
})
