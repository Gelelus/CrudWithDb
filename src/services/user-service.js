const User = require('../models/user');


const add = async function (data) {

    const user = new User(data) //password age login приходит 
    await user.save()
    return user


}

const get = async function (data) {

    return await User.findById(data)


}

const getAll = async function () {

    return await User.find({})


}

const update = async function (data) {
    console.log (data)
    return await User.findByIdAndUpdate(data.id, data, { returnOriginal: false })

}


const del = async function (data) {

    return await User.findByIdAndDelete(data)

}

const login = async function (data) { //password login приходит 
    
    console.log(data)
    const user = await User.findByCredentials(data.name, data.password) //статик метод из model проверка хэша и логина
   
    const token = await user.generateAuthToken()  // запись токена в базу и его return 
    
    return {user, token}
  
}

const logout = async function(req){ //request приходит 

    
    await req.user.save() //метод дабавленный при auth в request 

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