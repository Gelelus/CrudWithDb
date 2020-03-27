const User = require('../models/user');


const add = async function (req) {

    const user = new User(req) //password age login приходит 
    await user.save()
    return user


}

const get = async function (req) {

    return await User.findById(req)


}

const getAll = async function () {

    return await User.find({})


}

const update = async function (req) {

    return await User.findByIdAndUpdate(req.id, req, { returnOriginal: false })

}


const del = async function (req) {

    return await User.findByIdAndDelete(req)

}

const login = async function (req) { //password login приходит 
    console.log(req)
    const user = await User.findByCredentials(req.name, req.password) //статик метод из model проверка хэша и логина
    const token = await user.generateAuthToken()  // запись токена в базу и его return 
    return {user, token}
  
}

const logout = async function(req){

    req.user.token = '';
    await req.user.save()

}

module.exports = {
    add,
    get,
    update,
    del,
    getAll,
    login,
    logout
}