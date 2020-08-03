const fs = require('fs');
const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    getUserDetails,
    getUsers,
    updateSeller,
    removeUser,
    ToggleSaveSeller,
    updateUser
}


async function getUserDetails(userId) {
    const collection = await dbService.getCollection('user')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}


async function updateUser(user) {
    const collection = await dbService.getCollection('user')
    console.log('this is collection', collection);
    try {
        console.log('tryyyyyy')
        // const user = await collection.replaceOne({ "_id": ObjectId(`${currSeller._id}`) }, { $set: currSeller })
        const currUser = await collection.replaceOne({ "_id": ObjectId(`${user._id}`) }, { $set: user })
        console.log('this is user: ', currUser)
        // return user
    } catch (err) {
        console.log('ERROR: cannot update user')
        throw err;
    }
}

async function updateSeller(userId, userDetails) {
    try {
        var currUser = await users.filter(user => user.user_id === userId)
        currUser.title = userDetails.title
        currUser.description = userDetails.description
        currUser.price = userDetails.price
        currUser.imgUrls = userDetails.imgUrls
        currUser.tags = userDetails.tags
        currUser.area = userDetails.area
        currUser.rate = null
        currUser.reviews = []
        return currUser
    } catch (err) {
        console.log('ERROR: cannot find user')
        throw err;
    }
}

async function ToggleSaveSeller(details) {
    try {
        const currUser = await gUser.find(user => user._id === details.user_id)
        currUser.savedSeller.unshift(details.seller)
        return currUser
    } catch (err) {
        console.log('ERROR: cannot find user')
        throw err;
    }
}


async function removeUser(UserId) {
    try {
        var currUserIdx = await gUser.findIndex(user => user.user_id === userId)
        gUser.splice(currUserIdx, 1)
        return gUser
    } catch (err) {
        console.log('ERROR: cannot Delete user')
        throw err;
    }

}



async function getUsers() {
    try {
        sellerUsers = await gUser.filter(user => user.title)
        return sellerUsers
    } catch (err) {
        console.log('ERROR: cannot find user')
        throw err;
    }
}


var gUser =
    [
        {
            _id: '000001',
            fullName: 'Kevin Hart',
            email: 'Kevin@gmail.com',
            password: '001',
            profileImgUrl: "https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg",
            savedSeller: [
                {
                    _id: '',
                    imgUrl: '',
                    title: ''
                },
                {
                    _id: '',
                    imgUrl: '',
                    title: ''
                },
                {
                    _id: '',
                    imgUrl: '',
                    title: ''
                }
            ],
            createdAt: 15553132132,
            lastLoginAt: 1552355111,
            isAdmin: false,
            rate: 4.5,
            reviews: [
                {
                    miniUser: {
                        _id: '000002',
                        fullName: 'David Arkensaw',
                        profileImg: 'https://media.gettyimages.com/photos/smiling-lawyer-sitting-at-desk-in-office-picture-id104821116?s=612x612'
                    },
                    rate: 4,
                    reviewTxt: 'I invited Kevin Hart to host my party and it was just insane! ',
                    createdAt: 15523166612
                },
                {
                    miniUser: {
                        _id: '000003',
                        fullName: 'Loren Mills',
                        profileImg: 'https://www.thebalance.com/thmb/jCOulTG9w5WGoY6lZIHKqOQlY64=/3633x3633/smart/filters:no_upscale()/Gettywomanlawyer-5955ab903df78cdc296e8f7e.jpg'
                    },
                    rate: 5,
                    reviewTxt: 'Wowwwwwww, I can\'t event tell you how crazy was the party he hosted! his in the top 5 for me ! ',
                    createdAt: 15523166612
                }
            ],
            imgUrls: [
                'https://cdn.vox-cdn.com/thumbor/MjhHJn4GSCjJa3Gi5h7eD-21xAg=/1316x178:5184x2570/920x613/filters:focal(2952x522:3780x1350):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62641817/1067283616.jpg.0.jpg',
                'https://storage.googleapis.com/afs-prod/media/media:6e61b93c258143008f64f386c2c15cae/800.jpeg',
                'https://cdn.cnn.com/cnnnext/dam/assets/180503113132-kevin-hart-las-vegas-2016-exlarge-169.jpg',
                'https://ewscripps.brightspotcdn.com/dims4/default/c43d170/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsharing.wxyz.com%2Fsharescnn%2Fphoto%2F2016%2F04%2F14%2F1460659662_36229710_ver1.0_640_480.jpg',
                'https://farmweek.com/wp-content/uploads/2019/01/2.26515487.jpg',
            ],
            title: 'Comedian',
            description: 'Kevin Darnell Hart is an American stand-up comedian, actor, and producer. Born and raised in Philadelphia, Pennsylvania, Hart began his career by winning several amateur comedy competitions at clubs throughout New England, culminating in his first real break in 2001 when he was cast by Judd Apatow for a recurring role on the TV series Undeclared. The series lasted only one season, but he soon landed other roles in films such as Paper Soldiers (2002), Scary Movie 3 (2003), Soul Plane (2004), In the Mix (2005), and Little Fockers (2010).Hart\'s comedic reputation continued to grow with the release of his first stand-up album I\'m a Grown Little Man (2008), and performances in the films Think Like a Man (2012), Grudge Match (2013), Ride Along (2014) and its sequel Ride Along 2 (2016), About Last Night (2014), Get Hard (2015), Central Intelligence (2016), The Secret Life of Pets (2016), Captain Underpants: The First Epic Movie (2017), Jumanji: Welcome to the Jungle (2017), and Night School (2018).He also released four more comedy albums, Seriously Funny in 2010, Laugh at My Pain in 2011, Let Me Explain in 2013, and What Now? in 2016. In 2015, Time Magazine named Hart one of the 100 most influential people in the world on the annual Time 100 list. He starred as himself in the lead role of Real Husbands of Hollywood',
            tags: [
                'funny', 'host'
            ],
            price: 80,
            area: {
                country: 'USA',
                city: 'LAS VEGAS'
            }
        },
        {
            _id: '000002',
            fullName: 'elad',
            password: '001',
            createdAt: 1590357042435,
            lastLoginAt: 1590357042435
        }
    ]