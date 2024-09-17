const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const postrouts = require('./routes/postrouts');

dotenv.config();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/posts', postrouts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
