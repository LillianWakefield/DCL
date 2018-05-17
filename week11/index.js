const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json())

app.get('/', (request, result) => {
    result.send('OMG it works and you are a genius.');
});

app.get('/blog', (request, response) => {
    fs.readFile('blog-data.json', (err, data) =>{
        if (err) {return console.log(err)}
        response.send(JSON.parse(data));
    });
});

app.get('/blog/:id', (request, response)=> {
    fs.readFile('blog-data.json', (err, data)=>{
        if (err){return console.log(err)}
        const id = Number(request.params.id);
        const result = JSON.parse(data).filter((entry)=>{
            return entry.id ==id
        });
        response.send(result);
    })
});

app.post('/new', (request, response)=>{
    fs.readFile('blog-data.json', (err,data)=>{
        if (err) {return console.log(err)}
        let blogPosts = JSON.parse(data);
        let newID = blogPosts.length +1;
        let newBlogPost ={
            id : newID,
            first_name : request.body.firt_name,
            last_name : request.body.last_name,
            date : request.body.date,
            title : request.body.title,
            content : request.body.content,
        }
        blogPosts.push(newBlogPost)
        fs.writeFile('blog-data.json', JSON.stringify(blogPosts, null, ' '), ()=>{
            response.send(newBlogPost)
        });
    });
});
app.listen(3000, ()=>{
    console.log('Running on port 3000')
})