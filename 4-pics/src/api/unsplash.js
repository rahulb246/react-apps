import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Eyq4X2Z2GAM_dy7zaiIgcMS4zFayIl3ocCsUYKPANos'
    }
});