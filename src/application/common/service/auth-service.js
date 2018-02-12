import axios from 'axios';
import qs from 'qs';

export default {
  login(user) {
    var params = qs.stringify({
      'grant_type': 'password',
      'username': user.username,
      'password': user.password
    });
    return axios.post('oauth/token', params, {
      auth: {
        username: 'cid',
        password: '25d5e2e9b0ed47bbb9d4b82f4abc8c09'
      }
    }).then(response => {
      return response.data;
    });
  }
};
