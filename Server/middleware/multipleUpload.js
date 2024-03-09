import multer from "multer";

const storage=multer.memoryStorage();

const multipleUpload=multer({storage}).array('files',5)//adjust as per your need

export default multipleUpload;




///for single upload

//for single image 

// import multer from "multer";

// const storage=multer.memoryStorage();


// const singleUpload=multer({storage}).single("file");


// export default singleUpload




