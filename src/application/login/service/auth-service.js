import axios from 'axios';
import qs from 'qs'; // post form表单提交. 数据格式化

export default {
    login(user) {
        user.grant_type = "password";
        return axios.post('oauth/token', qs.stringify(user), {
            auth: {
                username: 'cid',
                password: '25d5e2e9b0ed47bbb9d4b82f4abc8c09'
            }
        }).then(response => {
            return response.data;
        });
    }
};
