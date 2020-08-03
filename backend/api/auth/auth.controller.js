const authService = require('./auth.service')


module.exports = {
    login,
    signup,
    logout
}



async function login(req, res) {
    const userDetails = req.body
    console.log(userDetails);
    
    try {
        const user = await authService.loginUser(userDetails)
        req.session.user = user;
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
        throw err
    }
}


async function signup(req, res) {
    const userDetails = req.body
    try {
        const user = await authService.signupUser(userDetails)
        req.session.user = user;
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}


