const listService = require('./list.service')



module.exports = {
    query
    // getTopSeller,
    // getNewSellers,
    // sortByName,
    // sortByNew,
    // sortByRate,
    // sellersBy
}

async function query(req, res) {
    const filter = req.query
    const sellers = await listService.query(filter)
    res.send(sellers)
}



// async function getTopSeller(req, res) {
//     const sellers = await listService.topSeller()
//     res.send(sellers)
// }

// async function getNewSellers(req, res) {
//     const sellers = await listService.newSellers()
//     res.send(sellers)
// }
// async function sellersBy(req, res) {
//     const tag = req.params
//     const sellers = await listService.sellersByTag(tag)
//     res.send(sellers)
// }





// async function sortByName(req, res) {
//     const sellerList = req.body
//     const sellers = await listService.sortByName(sellerList)
//     res.send(sellers)
// }

// async function sortByNew(req, res) {
//     const sellerList = req.body
//     const sellers = await listService.sortByDate(sellerList)
//     res.send(sellers)
// }
// async function sortByRate(req, res) {
//     const sellerList = req.body
//     const sellers = await listService.sortByRate(sellerList)
//     res.send(sellers)
// }





