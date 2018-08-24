import axios from "axios";

// Action generators

export const removeTweet = (_id) => ({
  type: "REMOVE_TWEET",
  _id
});


export const startRemoveTweet = (_id) => {
  return (dispatch) => {
    const url = "/api/users/me/trackers/tweets/".concat(_id);
    const axiosConfig = {
      method: "delete",
      url
    }

    axios(axiosConfig)
      .then((response) => {
        if(response.status !== 200){
          throw Error(response.message);
        } else {
          dispatch(removeTweet(_id))
        }
    });
  }
};



export const addTweet = ({ handle, _id }) => ({
  type: "ADD_TWEET",
  account: {
    handle,
    _id
  }
});


export const startAddTweet = ({ handle = "" } = {}) => {
  return (dispatch) => {

    const axiosConfig = {
      method: "post",
      url: "/api/users/me/trackers/tweets",
      data: {
        handle
      }
    }

    axios(axiosConfig)
      .then((response) => {
        if(response.status !== 200){
          throw Error(response.message);
        } else {
          dispatch(addTweet(response.data))
        }
    });
  }
};