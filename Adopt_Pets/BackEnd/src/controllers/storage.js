const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/imgs'); // Especifica la carpeta donde guardar las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`); // Puedes usar un nombre de archivo único aquí si lo prefieres
    }
});

const upload = multer({ storage });

module.exports = upload;