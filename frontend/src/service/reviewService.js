
import HttpService from './HttpService';

export default {
    addReview
}

async function addReview(review) {
    const currReview = await HttpService.post('review', review)
    return currReview
}
