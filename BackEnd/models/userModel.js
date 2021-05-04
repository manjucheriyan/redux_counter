const mongoose=require('mongoose');

const User = mongoose.model('User',{
    userID:String,
    password:String,
     
})
module.exports ={
    User
}

