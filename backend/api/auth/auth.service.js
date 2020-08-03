const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    loginUser,
    signupUser
}


async function loginUser(userLogin) {
    const email = userLogin.inputName
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ email })
        delete user.password
        return user
    } catch (err) {
        return Promise.reject(status(401).send('Invalid username/password'))
    }
}




async function signupUser(newUser) {

    const collection = await dbService.getCollection('user')
    var user = {
        fullName: newUser.fullName,
        email: newUser.email,
        password: newUser.password,
        createdAt: Date.now(),
        lastLoginAt: Date.now(),
    }
    try {
        await collection.insert(user);
        delete user.password;
        return user;
    } catch (err) {
        return Promise.reject(status(401).send('Invalid username/password'))
    }

}