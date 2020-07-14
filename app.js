//  mkdir RESTfulBlogApp
//  cd RESTfulBlogApp
//  npm init
//  git init
//  hub create

//  npm install express mongoose body-parser ejs --save
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

// body parser setup
app.use(bodyParser.urlencoded({extended: true}));
// static files setup
app.use(express.static);
// ejs template engine setup
app.set('view engine', 'ejs');

// port setup
app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log('The Yelp camp server has started');
});
