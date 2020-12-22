const express  = require('express');
let router = express.Router();
require('dotenv').config();


const { User } = require('../../models/user_model');

router.route("/register")
.post( async (req,res)=>{
    try {
        ///1 check if email taken
        if(await User.emailTaken(req.body.email)){
            return res.status(400).json({message:'Sorry email taken'})
        }

        /// 2 creating the model ( hash password)
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        /// 3 generate token
        const token = user.generateToken()
        const doc = await user.save();

        // 4 send email

        // save...send token with cookie
        res.cookie('x-access-token',token)
        .status(200).send(getUserProps(doc)); 
    } catch(error){
        res.status(400).json({message:'Error',error: error })
    }
})

const getUserProps = (user) => {
    return{
        _id: user._id,
        email: user.email,
        firstname:user.firstname,
        lastname: user.lastname,
        age: user.age,
        role: user.role
    }
}


module.exports = router;
