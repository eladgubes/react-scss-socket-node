const reviewService = require('./review.service')


module.exports = {
    addReview
}



async function addReview(req, res) {
    const review = req.body
    try{
        const currReview = await reviewService.addReview(review)
        return currReview
    }catch(err){
        res.status(500).send({ error: err })
    }

}