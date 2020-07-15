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

// MONGOOSE CONFIG
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB!'))
  .catch(error => console.log(error.message));

// MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//   title: 'Test Blog',
//   image: 'https://images.unsplash.com/photo-1586088209375-7c9f50ff8b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
//   body: 'This is a blog post',
// });

// APP CONFIG
app.set('view engine', 'ejs'); // ejs template engine
app.use(express.static('public')); // static files
app.use(bodyParser.urlencoded({extended: true})); // body parser

// RESTFUL ROUTES
// home
app.get('/', function(req, res) {
  res.redirect('/blogs');
});

// index
app.get('/blogs', function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { blogs: blogs });
    }
  });
});

// new
app.get('/blogs/new', function(req, res) {
  res.render('new');
});

// create
app.post('/blogs', function(req, res) {
  // create blog
  // Blog.create(data, callback);
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      res.render('new');
    } else {
      //  redirect to index
      res.redirect('/blogs');
    }
  });
});

// PORT CONFIG
app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log('The blog server has started');
});
