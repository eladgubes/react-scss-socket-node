const express = require('express')
const { query} = require('./list.controller')

const router = express.Router()

router.get('/', query) //check
// router.get('/savedItems/', getSavedItems)
// router.get('/topSeller', getTopSeller)
// router.get('/newSellers', getNewSellers)
// router.post('/sortByName', sortByName)
// router.post('/sortByNew', sortByNew)
// router.post('/sortByRate', sortByRate)
// router.get('/sellersBy/:tag', sellersBy)
// router.get('/:id', myItems)
// router.get('/carrousel', getCarrousel)
// router.get('/topCategories', getTopCategories) //check


module.exports = router