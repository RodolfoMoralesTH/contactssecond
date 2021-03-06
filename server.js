const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//To use req.body we have to add
//Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req,res) => res.json({msg: 'Poopie'}));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

