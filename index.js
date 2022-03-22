
const mongoose = require('mongoose');


const getBook = new mongoose.Schema({
    bookName: {
        type : String,
        required: true
    },
    bookAuthor: {
        type : String,
        required: true
    
    
    },
    bookAvailable:{
        type: Boolean,
        required: true,
        default: true
    }
})
module.exports = mongoose.model('getbook',getBook)





























































































//const { string } = require('joi');
// mongoose.connect('mongodb://localhost/library')
//     .then(() => console.log('connected to MongoDB.....'))
//     .catch(err => console.error('could not connect to MongoDB....',err));


// const getBook= new mongoose.Schema({
//     bookName: String,
//     bookAuthor: String,
//     bookAvailable: Boolean
// });    
//const Course = mongoose.model('course',getBook);



// async function createCourse(){

// const course = new Course({
//     bookName:"maths A",
//     bookAuthor:"Ganesh",
//     bookAvailable: true,

// });


// const result = await course.save();
// console.log(result);
// }
// //createCourse();


// async function getCourses(){
//    const courses = await Course.find();
//    console.log(courses);
// }
// getCourses();

