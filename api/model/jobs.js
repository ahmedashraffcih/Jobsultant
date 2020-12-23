const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Jobs
let Job = new Schema({
    title : String , 
    Company : String , 
    career_level : String , 
    description : String ,
    date : Date , 
    skills : Array , 
    job_Details : String
}
,{
    collection: 'Jobs'
});

module.exports = mongoose.model('Job', Job);