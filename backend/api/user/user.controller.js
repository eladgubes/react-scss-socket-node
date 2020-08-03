
const userService = require('./user.service')


module.exports = {
    deleteUser,
    getUser,
    updateUser,
    getUsers,
    ToggleSaveSeller
}


async function getUser(req, res) {
    const { user } = req.params
    // console.log('controller' ,user);
    try {
        const currUser = await userService.getUserDetails(user)
        res.send(currUser)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function getUsers(req, res) {
    try {
        const user = await userService.getUsers()
        res.send(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}


async function deleteUser(req, res) {
    const id = req.params
    try {
        await userService.removeUser(id)
        res.send()
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function updateUser(req, res) {
    const currUser = req.body
    try {
        const user = await userService.updateUser(currUser)
        res.send(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

// async function updateSeller(req, res) {
//     const userDetails = req.body
//     const userId = req.params
//     try {
//         const user = await userService.updateSeller(userId, userDetails)
//         res.send(user)
//     } catch{
//         res.status(401).send({ error: err })
//     }
// }

async function ToggleSaveSeller(req, res) {
    const details = req.body
    try {
        const user = await userService.ToggleSaveSeller(details)
        res.send(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}


