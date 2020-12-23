const express = require('express')
const UserRouter = express.Router() 
const mongoose = require('mongoose')
const users = require('../model/users')
url = "mongodb+srv://Seif:00774400@jobsultant.nnpaa.mongodb.net/jobsultant?retryWrites=true&w=majority"
const bcrypt = require('bcrypt')



///All Users/// 
UserRouter.get('/users',(req,res)=>{
    mongoose.connect(url,()=>{
        users.find({},(err,result)=>{
            if (err) res.json(err) 
            else  {
                res.json(result)
                mongoose.disconnect()
        }}) 
    })
})

/// SignUP ///
UserRouter.post('/Register',(req,res)=>{
    return new Promise ((resolve , reject)=>{
        mongoose 
        .connect(url)
        .then(()=>{
            
           return users.findOne({ Email : req.body.Email })
        })
        .then((result)=>{
            if (result) {
                reject(res.json('User is already registered'))
                mongoose.disconnect() 
            }
            else {
               return req.body.password
            }
        })
        .then(hashedPassword => {
            let user = new users ({
                fname : req.body.fname , 
                lname : req.body.lname , 
                Email : req.body.Email , 
                password : hashedPassword
            })
            return user.save()
        })
        .then(()=>{
            resolve(res.json('Registered successfully'))
            mongoose.disconnect() 
        }).catch(err=>{
            reject(res.json(err))
            mongoose.disconnect() 
        })
    })
})


// /LOGIN///
UserRouter.post('/Login',(req,res)=>{
   return new Promise ((resolve , reject) => {
        mongoose.connect(url)
        .then(()=>{
            return users.findOne({ Email : req.body.Email }) 
        })
        .then(user => {
            if(!user) {
                reject(res.json('Email is not valid , Register first'))
                mongoose.disconnect()
            }
            else {
                if (req.body.password != user.password) {
                    reject(res.json('Password is not valid'))
                    mongoose.disconnect()    
                }
                else {
                    resolve(res.json('Login successfully'))
                    mongoose.disconnect()
                }
            }
        })
        .catch(err => {
            reject(res.json(err))
        })
   })
})


//logout 
// UserRouter.all('/logout',(req,res)=>{
//     req.session.destroy() 
//     res.json('Logged Out and session is removed')
// })

//export to app.js
module.exports = UserRouter;