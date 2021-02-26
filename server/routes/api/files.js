const express  = require('express');
const multer  = require('multer')
const formidableMiddleware = require('express-formidable');
const path = require('path');
const { DEFAULT_ENCODING } = require('crypto');
let router = express.Router();
require('dotenv').config();

/////////
// multer configs


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
       console.log(file); 
       cb(null, file.originalname)
       //cb(null, Date.now() + path.extname(file.originalname))
    }
});
const fileFilter = (req, file,cb) => {
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' ){
        //// let the file be stored.
        cb(null,true)
    } else {
        /// not.
        cb(null,false)
    }
}
const upload = multer({storage:storage,fileFilter:fileFilter})
////


router.route("/multerupload")
.post( upload.single('file'),async(req,res)=>{
    try{
        res.status(200).json({msg:'uploaded!!'})
    } catch(error){
        res.status(400).json({error})
    }
})  


module.exports = router;