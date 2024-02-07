const siswa = require('../model/siswa');

const getAll = async (req, res) => {
    try {
        const data = await siswa.find()
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const create = async (req, res) => {
//   try {
//     const data = await siswa.create(req.body);
//     res.status(201).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
    const data = new siswa({
        nama : req.body.nama,
        nisn : req.body.nisn,
        alamat : req.body.alamat
    });
    try {
    const save = await data.save();
    console.log(save);
    res.status(201).json(data);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getId =  async (req, res) => {
    try {
        const data = await siswa.findById(req.params.id);
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


const update = async (req, res) => {
    try {
        const data = await siswa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
}


const hapus = async (req, res) => {
    try {
        const data = await siswa.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
}

module.exports = {
    getAll,
    create,
    getId,
    update,
    hapus
}