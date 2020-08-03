const express = require('express')
const { getUsers, getUser, deleteUser,ToggleSaveSeller,updateUser } = require('./user.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getUsers) //check
router.get('/:user', getUser) //check
router.post('/:id', updateUser)
router.post('/saved', ToggleSaveSeller)
router.delete('/:user', deleteUser)
// router.post('userToSeller/:user', updateSeller)

module.exports = router