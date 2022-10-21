const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")
const {uid} = require("uid")
const bcrypt = require("bcrypt")

let posts = []
//npm i uid  (sugeneruoja atsitiktinius id)
//npm i bcrypt (paswordų hashinimo biblioteka)

module.exports = {
    addPost: (req, res) => {
        const {username, title, image} = req.body

        const newPost = {
            title,
            username,
            image
        }

        posts.push(newPost)

        res.send({posts: posts})
    },
    reply: async (req, res) => {
        const {user, message, index} = req.body

        posts[index].replies.push({
            user, message
        })

        res.send({messages: posts})
    },
    register: async (req, res) => {
        const {email, passOne: password, photo} = req.body

        const hash = await bcrypt.hash(password, 10)

        new userSchema({
            email,
            password: hash,
            secret: uid(),
            photo
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    },
    //                   loginas be hash'o
    // login: async (req, res) => {
    //     const {email, password} = req.body
    //     console.log(email, password)

    //     const userExists = await userSchema.findOne({email, password})

    //     if(userExists) {
    //         return sendRes(res, false, "all good", {secret: userExists.secret})
    //     }

    //     return sendRes(res, true, "bad credentials", null)
    // },
    login: async (req, res) => {
        const {email, password} = req.body
        console.log(email, password)

        const userExists = await userSchema.findOne({email})

        if(userExists) {
// sulyginam hash su paswordu
            const compare = await bcrypt.compare(password, userExists.password)

            if(compare) return sendRes(res, false, "all good", {secret: userExists.secret})
        }

        return sendRes(res, true, "bad credentials", null)
    },
    getPhoto: async (req, res) => {
        const {secret} = req.params

        const user = await userSchema.findOne({secret})

        return sendRes(res, false, "all good", {photo: user.photo})
    },
    info: async(req, res) => {
        // res.send({ok: "okei"})
        res.send(req.body)
    },
    galery: async(req, res) => {
        // res.send({ok: "okei"})
        res.send(req.body)
    }
}


