const express = require("express")
const router = express.Router()
const {emailValid, passwordsValid, userValid, secretValid} = require("../midleware/middle")

const {reply, addPost, register, login, getPhoto, info, galery} = require("../controllers/mainController")


router.post("/addPost", addPost)
router.post("/reply", reply)

router.post("/register", emailValid, passwordsValid, userValid, register)
router.post("/login", login)
router.get("/getPhoto/:secret", secretValid, getPhoto)
router.get("/info", info)
router.get("/galery", galery)



module.exports = router