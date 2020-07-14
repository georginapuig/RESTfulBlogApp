
//  mkdir RESTfulBlogApp
//  cd RESTfulBlogApp
//  npm init
//  git init
//  hub create
//  npm install express mongoose body-parser --save
//  git push origin master 
//  touch app.js
// npm install ejs --save

const bodyParser = require('body-parser'),
      mongoose   = require('mongoose'),
      express    = require('express'),
      app        = express();

// mongoose setup
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));
