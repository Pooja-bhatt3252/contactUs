const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Data = mongoose.model('contactList',{
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : Number,
    country : String,
    about : String,
})

router.post('/addData',async(req,res) => {
    const {firstName,lastName,email,phoneNumber,country,about} = req.body;
    const data = new Data({firstName,lastName,email,phoneNumber,country,about});

    try{
        await data.save();
        res.status(200).json({message: 'Data successfully added to mongoDb'});
    }catch(error){
        console.error("Error while adding data to mongoDb");
        res.status(500).json({message: 'Internal server error, MongoDB'});
    }
});

module.exports = router;