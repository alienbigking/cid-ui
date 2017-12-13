// import axios from 'axios';

export default {
    getTenantList() {
        // return axios.get('api/users/me').then(response => {
        //     return response.data;
        // }).catch(err => {
        //     if (err) return false;
        // });
        var response = [
            {
                name: '十一监区',
                prePrison: '十二监区',
                id: 123,
                makeDate: '2019-10-11 12:12:12',
                updateDate: '2012-12-12 12:12:12'
            },
            {
                name: '十一监区',
                prePrison: '十二监区',
                id: 32345,
                makeDate: '2019-10-12 12:12:12',
                updateDate: '2012-12-11 12:12:12'
            }
        ];
        return new Promise((resolve) => {
            resolve(response);
        });
    }
};
