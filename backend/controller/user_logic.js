const User = require('../model/user')

const register = async (req,res)=>{
    try {
        console.log(req.body,"ewftew")
        const user = await User.create(req.body)
        return res.json(user)   
    } catch (error) {
        return res.json(error)
    }
}

const login = async (req,res)=>{
    
    const {email, password} = req.body

    if(!email || !password){
        res.json("Please Provide email and password ")
        return
    }

    const user = await User.findOne({email,password})
    console.log(user)
    if(!user){
        res.json("Invaild User")
        return 
    }

    res.json(user)
}

module.exports = {
    register,
    login
}