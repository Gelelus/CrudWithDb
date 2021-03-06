const User = require('../models/user');


const add = async function (data) {
    
    const user = new User(data) //password age login приходит 
    await user.save()
    return user


}

const get = async function (id) {

    return await User.findById(id)


}

const getAll = async function () {

    return await User.find({})


}

const update = async function (data) {
    console.log (data)
    return await User.findByIdAndUpdate(data.id, data, { returnOriginal: false })

}


const del = async function (id) {

    return await User.findByIdAndDelete(id)

}

const login = async function (data) { //password login приходит 
    
    console.log(data)
    const user = await User.findByCredentials(data.name, data.password) //статик метод из model проверка хэша и логина
   
    const token = await user.generateAuthToken()  // запись токена в базу и его return 
    
    return {user, token}
  
}



module.exports = {
    add,
    get,
    update,
    del,
    getAll,
    login
}