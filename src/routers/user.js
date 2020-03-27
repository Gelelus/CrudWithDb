const express = require('express')

const auth = require('../middleware/auth')
const UserController = require('../controllers/user-controller')
const user_controller = new UserController()

const router = new express.Router()


router.post('/',user_controller.addUser)                //регистрация

router.delete('/:id', auth, user_controller.deleteUser) // удаление 
router.put('/', auth, user_controller.updateUser)       // изменение
router.get('/:id', auth, user_controller.getUser)       // юзера

router.get('/', user_controller.getAllUser)             //визуал 
router.post('/login', user_controller.login)            //авторизация
router.post('/logout',auth , user_controller.logout)     //выход 

module.exports = router