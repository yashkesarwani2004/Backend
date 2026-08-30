import multer from "multer";

//diskstorage ek function hai jo ek local storage ko batata hai
//yaha per hm log local storage me file ko save kar rahe unka des aur name de rahe fir cloudinary isko le kar database me save kar dega
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,"./public/temp")
    },
    filename: function(req,file,cb){
        cb(null,"file.originalname")
    }
})

export const upload = multer({
    storage,
})

