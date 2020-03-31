import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XXXXXXXcreate your own ID and put it here XXXXXXXXX'
    }
});
