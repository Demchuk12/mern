const {Router} = require('express');
const { model } = require('mongoose');
const router = Router();
const User = require('../models/User');

// /api/auth/register
router.post('/register', async (req, res ) => {

})

// /api/auth/login
router.post('/login', async (req, res ) => {
    try{

        const {email, password} = req.body;
        const candidate = await User.findOne({ email });

        if (candidate){
             return res.status(400).json({message: 'such a user already exists'});
        }




    } catch(e){
        res.status(500).json({message: 'Server Error'});
    }
    
})


module.exports = router;
