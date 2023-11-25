const mongoose=require('mongoose');

async function connect(){
    try {
        if(!process.env.MONGODB_URI){
            return Error("no mongodb URI");
        }
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected");
        return db;
    } catch (error) {
        console.error(error);
    }
}
module.exports = {connect};