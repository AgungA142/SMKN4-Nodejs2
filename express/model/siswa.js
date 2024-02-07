const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nisn: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('siswa', schema);