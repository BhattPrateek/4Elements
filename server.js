const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();
const IP = '127.0.0.1';
const PORT = process.env.PORT || 8080;

const mongoose = require('mongoose');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/LocalDB';

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'app/public')));

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded! connected to: ' + uristring);
  }
});

    var userSchema = new mongoose.Schema({
      name: {
        first: String,
        last: { type: String, trim: true }
      },
      age: { type: Number, min: 0 }
    });
    
       var PUser = mongoose.model('PowerUsers', userSchema);

    // Creating one user.
    var johndoe = new PUser ({
      name: { first: 'John', last: '  Doe   ' },
      age: 25
    });

    // Saving it to the database.
    johndoe.save(function (err) {if (err) console.log ('Error on save!')});


app.listen(PORT, () => {
  console.log(`Listening on ${IP}:${PORT}`);
});
