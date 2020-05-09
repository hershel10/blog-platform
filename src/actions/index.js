import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=Hershel_wathore';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
};


export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      history.push('/');
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function createPost(post, history) {
  console.log(post);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  };
}
