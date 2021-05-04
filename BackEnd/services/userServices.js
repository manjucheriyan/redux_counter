const {User}= require("../models/userModel");

let currentUser;


// function getUsers(){
//     return User.find({}) 
//     .then (users=>{
//             return{
//                 statusCode:200,
//                 users:users
//             }
//     })
// }


function addUser(userID,password){
    console.log("in user service -register");
    return User.findOne({
        userID
    })
    .then (user=>{
        if(user){
            return{
                statusCode:400,
                message:"User Account already exists"
            }
        }
        const newUser= new User({
            userID,password
        });
        newUser.save();
        return {
            statusCode:200,
            message:"Account created successfully"
        }
    })
}



function login(userID,password){
    console.log('userServices - login()');
    console.log(userID+password);
    
    return User.findOne({
        userID
    })
    .then (user=>{
        if(user){
            let CorrectPassword= user.password
            console.log(CorrectPassword)
            if(CorrectPassword==password){
                return{
                    statusCode:200,
                    record:user,                
                    message:"Logged in successfully"
                    
                }
            }

         else { 
            return{
            statusCode:200,
            message:"Password doesnt match userID"
            
        }

         }   
        }
        return {
            statusCode:400,
            message:"Invalid credentials"
        }
    });
}





module.exports={
    
    login:login,
    
    addUser:addUser
    }