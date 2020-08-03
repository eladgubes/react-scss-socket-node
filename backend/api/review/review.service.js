const fs = require('fs');
const userService = require('../user/user.service')
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addReview
}


async function addReview(review) {
    var currSeller = await userService.getUserDetails(review.sellerId)
    const currReview = {
        miniUser: {
            _id: review.miniUser._id,
            fullName: review.miniUser.fullName,
            profileImg: review.miniUser.profileImg
        },
        rate: parseInt(review.rate),
        reviewTxt: review.reviewTxt,
        createdAt: Date.now()
    }
    try {
        currSeller.reviews.unshift(currReview)
        currSeller.rate = await _getRate(currSeller)
        const collection = await dbService.getCollection('user')
        const user = await collection.replaceOne({ "_id": ObjectId(`${currSeller._id}`) }, { $set: currSeller })
    } catch (err) {

        throw err
    }

}


function _getRate(user) {
    var rate = 0;
    user.reviews.map(review => rate += review.rate)
    rate = rate / user.reviews.length
    return rate
}

