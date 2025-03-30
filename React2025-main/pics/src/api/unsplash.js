import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 70f211a8fc3255a5dfaec918a41ff77dcb7da25b958c3fe8cb09eaf0608ecb0a'
   }
});