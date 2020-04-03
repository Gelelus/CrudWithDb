const express = require("express");

const valid = require("../middleware/validation");
const validCreateUser = require("../dtos/create-user.dto.js");
const validLoginUser = require("../dtos/login-user.dto.js");

const auth = require("../middleware/auth");
const UserController = require("../controllers/user-controller");
const user_controller = new UserController();

const router = new express.Router();

router.post("/", valid(validCreateUser),  user_controller.addUser); //регистрация

router.delete("/:id", auth, user_controller.deleteUser); // удаление
router.put("/", auth, user_controller.updateUser); // изменение
router.get("/:id", auth, user_controller.getUser); // юзера

router.get("/", auth, user_controller.getAllUser); //визуал
router.post("/login",valid(validLoginUser) , user_controller.login); //авторизация
router.post("/logout", auth, user_controller.logout); //выход

module.exports = router;
