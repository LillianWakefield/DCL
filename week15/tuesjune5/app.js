// ! Remember to `npm init`, create a db and rename the '.env.example' file to '.env'!
const dotenv = require('dotenv');
const express = require('express');
const Sequelize = require('sequelize');

dotenv.load();
const db = {
    pass: process.env.POSTGRES_PASS,
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    name: process.env.POSTGRES_DB_NAME,
}
const sequelize = new Sequelize(`postgres://${db.user}:${db.pass}@${db.host}:5432/${db.name}`);
// ! This next line is insecure- Be sure not to accidentally share your password!
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/blog');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const User = sequelize.define('Users', {
    username: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: Sequelize.STRING,
});

//? Only need to run this once
User.sync();

// send empty response on homepage
app.get('/', (req, res) => {
    res.json({});
})

// get all users
app.get('/users', (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    })
})

// get single user by url param (i.e. '/user/jimmy')
app.get('/user/:username', (req, res) => {
    User.findOne({
        where: {
            username: req.params.username
        }
    }).then(users => {
        res.json(users || {});
    })
})

// create new user via post data
app.post('/user', (req, res) => {
    if (!req.body.username) return res.json({ 'error': 'must include username' });
    if (!req.body.password) return res.json({ 'error': 'must include password' });
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.json({
            error: err.errors ? err.errors[0].message : `Error creating user ${req.body.username}`
        })
    });
});

// update existing user via post data
app.put('/user', (req, res) => {
    if (!req.body.username) return res.json({ 'error': 'must include username' });
    if (!req.body.password) return res.json({ 'error': 'must include password' });
    User.update({
        'password': req.body.password,
    }, {
        where: {
            username: req.body.username,
        }
    }).then(user => {
        res.json({ 'success': true });
    })
    .catch((err) => {
        return res.json({ 'error': err || `failed to update user ${req.body.username}` })
    })
});

// delete user via post data
app.delete('/user', (req, res) => {
    if (!req.body.username) return res.json({'error':'must include username'});
    User.destroy({
        where: {
            username: req.body.username,
        }
    }).then(user => {
        res.json({ 'success': true });
    })
    .catch((err) => {
        return res.json({'error': err || `failed to delete user ${req.body.username}`})
    })
});

//set app to listen on PORT env var or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
