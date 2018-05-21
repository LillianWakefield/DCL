import { promisify } from 'util';
var express = require('express');
var router = express.Router();
const util = require('util');
const fs = require('fs');
const readFile=util.promisify.apply('fs.readFile')

/* GET home page. */
router.get('/', function(req, res, next) {
  readFile('blog-posts.json')
  .then((data)=>{
    const blogPosts = JSON.parse(data);

  let dataforTemplate = {
    title: 'Panda Express',
    myName: 'Lillian Wakefield',
    cats: ['oaklay', 'milla']
  };
  return dataforTemplate
})
.then((templateData)=>{
  res.render('index', dataforTemplate);
}).cath(err=> {
  console.log(err);
});

});
router.get('/:postId', (req,res,next)=>{
  readFile('blog-posts.json')
  .then((data)=>{
    const blogPosts = JSON.parse(data);
    const id=Number(request.params.postID);
    const thePost = blogPosts[id]
    console.log('the id is: '+id)
    console.log('here is the post'+JSOn.stringify(thePost))
    return thePost
})
.then((blogPostData)=>{
  res.render('blog-post', blogPostData);
  
}).cath(err=> {
  console.log(err);
});

});
module.exports = router;
