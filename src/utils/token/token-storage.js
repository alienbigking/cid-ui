import jwtDecode from 'jwt-decode';

export default {
    decodeAccessToken() {
        const tokenStorage = localStorage.getItem('TOKEN');
        if (tokenStorage) {
            const token = JSON.parse(tokenStorage);
            return jwtDecode(token.access_token);
        }
    }
};
