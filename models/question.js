const mongoose = require("mongoose");


const questionSchema = new mongoose.Schema({
    question:{type:String,required:true}, 
    subject:{type:String, required:true}, 
    topic:{type:String}, 
    difficulty:{type:String, required:true,index:true}, 
    marks:{type:Number,required:true,index:true}
});

questionSchema.index({difficulty:'text',marks:'ascending'});

const question = mongoose.model('questions',questionSchema);

module.exports=question;