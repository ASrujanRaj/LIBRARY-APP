
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
        return res.json(nextData)
        
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




























































































































































