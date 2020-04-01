import axios from 'axios';

const KEY = 'AIzaSyAFzMreoda2bZ9ZLS-Uui3uhLquKnONK5M';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});