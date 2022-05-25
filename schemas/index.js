const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/article_database").catch((err) =>{
        console.error(err);
    }); 
};

module.exports = connect;

