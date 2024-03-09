import cloudinary from 'cloudinary';
import { getDataUri } from '../utils/datauri.js';
import { Image } from '../Model/imageModel.js';

export const handleImageUpload=async(req,res)=>{
    try {
        if(!req.files||req.files.length===0){
            return res.status(400).json({message:"No file were uploaded"});
        }

        const images=[];


        //process each uploaded file
        for (const file of req.files){
            const fileDataUrl=getDataUri(file);

            //uplod image to cloudinary

            const cloudinaryUpload=await cloudinary.v2.uploader.upload(fileDataUrl.content);

            const image={
                public_id:cloudinaryUpload.public_id,
                url:cloudinaryUpload.secure_url,
            }
            images.push(image);
        }
        await Image.create({images});
        return res.status(200).json({message:'Image uploaded succesfully'})
    } catch (error) {
        console.log(error.message);
    }
}







//for single uplad 
// import cloudinary from 'cloudinary';
// import { getDataUri } from '../utils/datauri.js';
// import { Product } from '../model/productModel.js';

// export const handleImageUpload =async (req, res, next) => {

//     try {
//         const file=getDataUri(req.file);
//         // console.log(fileUri);
     
//         const myCloud=await cloudinary.v2.uploader.upload(file.content);
//         const image = {
//             public_id: myCloud.public_id,
//             url: myCloud.secure_url,
//           };
        
//         await Product.create({
//             images:[image]
//         })
     
//         console.log(myCloud.public_id);
//         console.log(myCloud.secure_url);
//     } catch (error) {
//         console.log(error);
//     }
  
// };