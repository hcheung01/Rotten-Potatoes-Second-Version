const express = require('express')
const app = express()
// Mongoose database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });

// Model with Mongoose
const Review = mongoose.model('Review', {
  title: String
});

// Initialize Handlebars.js in your app.
var exphbs = require('express-handlebars');

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Review route and eventually to Root Route
// OUR MOCK ARRAY OF PROJECTS

// let reviews = [
//   { title: "Great Review" },
//   { title: "Next Review" }
// ]

// INDEX
app.get('/', (req, res) => {
  Review.find().then((reviews) => {
    res.render('reviews-index', {reviews: reviews});
  }).catch((err) => {
    console.log(err);
  })
})
