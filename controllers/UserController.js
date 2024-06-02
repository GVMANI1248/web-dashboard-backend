const UserModel = require('../models/UserModel')

module.exports.getUser = async (req,res) => {
    const user = await UserModel.find()
    res.send(user)
}

module.exports.saveUser = async (req,res) => {
    const {text } = req.body
    UserModel
    .create({text})
    .then((data)=> {
        console.log('Added Successfully....')
        console.log(data);
        res.send(data)
    })
}

module.exports.updateUser = async (req, res ) => {
    const {_id,text} = req.body
    UserModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send('Updated Successfully...'))
    .catch((err) => console.log(err))
}

module.exports.deleteUser = async (req, res ) => {
    const {_id} = req.body
    UserModel
    .findByIdAndDelete(_id)
    .then(()=>res.send('Deleted Successfully...'))
    .catch((err) => console.log(err))
}