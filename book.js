
const mongoose = require('mongoose');
const getBook = require('./index');
const express = require('express');
const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://Bermintu123:Bermintu123@cluster0.6ooos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
     .then(() => console.log('connected to MongoDB.....'))
     .catch(err => console.error('could not connect to MongoDB....',err));


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/getBooks',async (req,res)=>{
    const data = new getBook({
        bookName : req.body.bookName,
        bookAuthor : req.body.bookAuthor,
        bookAvailable : req.body.bookAvailable
    })

    try {
        const nextData = await data.save()
        res.json(nextData)
        
    }
    catch(err){
        console.log(err.message);
    }
    
})

app.get('/getBooks',async (req,res)=>{
    try{
        const allData = await getBook.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }

})

app.get('/getBooks/:id',async (req,res)=>{
    try{
        const Data = await getBook.findById(req.params.id);
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }

})


app.listen(3000,()=>console.log('server running....'))



























































































































































// const Joi = require('joi');
// const express = require('express');
// const app = express();
// app.use(express.json());
// const getBook = [
//     {
//       bookName: 'social',
//       bookAuthor: 'adithya',
//       bookAvailable: true,
//       bookId: 1,

//     },
//     {
//         bookName: 'science',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 2,

//     },
//     {
//         bookName: 'maths',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 3,

//     },
//     {
//         bookName: 'physics',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 4,

//     },
//     {
//         bookName: 'chemistr',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 5,

//     },
//     {
//         bookName: 'biology',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 6,

//     },
//     {
//         bookName: 'english',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 7,

//     },
//     {
//         bookName: 'telugu',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 8,

//     },
//     {
//         bookName: 'hindi',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 9,

//     },
//     {
//         bookName: 'botony',
//         bookAuthor: 'adithya',
//         bookAvailable: true,
//         bookId: 10,

//     }
    
// ];

// // mongoose.connect('mongodb://localhost/library')
// //     .then(() => console.log('connected to MongoDB.....'))
// //     .catch(err => console.error('could not connect to MongoDB....',err));


// // const getBook = new mongoose.Schema({
// //     bookName: String,
// //     bookAuthor: String,
// //     bookAvailable: Boolean
// // });
  












// app.get('/', (req, res) => {
//     res.send('Hello world');
// });
// app.get('/jav/getBook', (req, res) => {
//     res.send(getBook);
// });

// app.post('/jav/getBook', (req, res) => {
//     const schema = {
//       bookName: Joi.string().min(3).required()
//     };

//     const result = Joi.valid(req.body, schema);
//     console.log(result);

//     if(!req.body.bookName || req.body.bookName.length < 3){
//         res.status(400).send('Name is required and should be minimum 3 characters');
//         return;
//     }

//     // if (result.error) {

//     //     res.status(400).send(result.error.details[0].message);
//     //     return;
//     // }


//     const course = {
//         bookName: req.body.bookName,
//         bookAuthor: req.body.bookAuthor,
//         bookAvailable: req.body.bookAvailable,
//         bookId: getBook.length + 1,

//     };
//     getBook.push(course);
//     res.send(course);
    
// });

// app.get('/jav/getBook/:bookId', (req, res) => {
//     const course = getBook.find(c => c.bookId === parseInt(req.params.bookId));
//     if (!course) res.status(404).send('The course with given Id was not found.');
//     res.send(course);
// });

// // app.listen(3000, () => console.log('Listening on port 3000.....'));
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));