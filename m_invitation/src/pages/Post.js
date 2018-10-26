import React from 'react';
import axios from 'axios';

let data = async () => {
    const res = await axios('https://api.tvmaze.com/search/shows?q=batman');
    // console.log("res :: ", res.json);
    return res; 
}

console.log("data :: ", data());

const Post = ({ match })=> (
    <div>
        포스트 {match.params.id}
        
    </div>
);

export default Post;