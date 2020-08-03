const fs = require('fs');
var authService = require('../auth/auth.service');
const dbService = require('../../services/db.service')
// const userService = require('./user.service')




module.exports = {
    query
}


async function query(filter = {}) {
    // console.log(filter);
    
    const criteria = _buildCriteria(filter)
    const collection = await dbService.getCollection('user')
    try {
        const users = await collection.find(criteria).toArray();
        // users.forEach(user => delete user.password);
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

function _buildCriteria(filter) {
    const criteria = {};
    criteria['$or'] = [{ title: filter.searchKey }, { tags: filter.searchKey }]
    return criteria;
}




