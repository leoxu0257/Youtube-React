import axios from 'axios';


const KEY = 'AIzaSyBxMbfAS_ou4J6lfwguCYratNmqPxUJpRU';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});


