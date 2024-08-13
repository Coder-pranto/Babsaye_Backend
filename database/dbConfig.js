const mongoose = require('mongoose')
// const uri = process.env.MONGO_URI|| 'mongodb://127.0.0.1:27017/bebsaye'
const uri = "mongodb+srv://efood_db:efood1234567@cluster01.8onemqp.mongodb.net/babsaye_db?retryWrites=true&w=majority";

const connectDatabase = async()=>{
    try {
      await  mongoose.connect(uri)
      console.log('> Database Connected...'.bgCyan);
    } catch (error) {
        console.log(`> Error while connecting to mongoDB : ${error.message}`.underline.red );
        process.exit(1);  
    }
}

module.exports = connectDatabase;

