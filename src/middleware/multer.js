const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (request, response, callback) => {
        callback(null, 'public/profiles');
    },
    filename: (request, file, callback) => {
        const timestamp = new Date().getTime();
        const extension = path.extname(file.originalname);
        callback(null, `profile_id-${timestamp}${extension}`);
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 4 * 1000 * 1000 // filesize 4 MB
    }
});

module.exports = upload;