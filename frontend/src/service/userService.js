import HttpService from './HttpService';


export default {
    signup,
    login,
    logout,
    getUser,
    query,
    getUsers,
    deleteUser,
    toggleSaved,
    sortList,

}


async function signup(inputUser) {
    const userCred = {
        fullName: inputUser.inputName,
        email: inputUser.inputMail,
        password: inputUser.inputPass
    }
    const user = await HttpService.post('auth/signup', userCred)
    return _handleLogin(user)
}



async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)
}

async function logout() {
    await HttpService.post('auth/logout')
    sessionStorage.clear();
}


function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

async function query(filter) {

    var queryStr = `?searchKey=${filter.searchKey.toLowerCase()}&place=${filter.place}&sort=${filter.sort}`;
    const sellers = await HttpService.get(`list/${queryStr}`)
    return sellers
}



async function getUser(userId) {
    const user = await HttpService.get(`user/${userId}`)
    return user
}

async function deleteUser(userId) {
    const user = await HttpService.delete(`user/${userId}`)
    return user
}

async function getUsers() {
    const users = await HttpService.get(`user/`)
    return users
}

async function updateUser(user) {
    console.log('update user: ', user)
    const users = await HttpService.post(`user/${user._id}`, user)
    return users
}



async function toggleSaved(miniSeller, user) {
    const sellerIndex = user.savedSeller.findIndex(seller => seller._id === miniSeller._id)
    if (sellerIndex !== -1) user.savedSeller.splice(sellerIndex, 1)
    else user.savedSeller.unshift(miniSeller)
    await updateUser(user)
    return _handleLogin(user)
}

async function sortList(sortBy,userList){
    console.log(sortBy,userList);
    
}