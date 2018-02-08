export default {
  config(axios) {
    axios.interceptors.request.use(
      config => {
        config.baseURL = `${process.env.CID_BASE_URL}`;
        config.withCredentials = true;
        const tokenStorage = localStorage.getItem('TOKEN');
        if (tokenStorage) {
          const token = JSON.parse(tokenStorage);
          config.headers.Authorization = `Bearer ${token.access_token}`;
        }
        // return config;
        return Promise.resolve(config);
      },
      error => {
        return Promise.reject(error);
      });
  }
};
