import axios from 'axios';

export default {
    get(id) {
        return axios.get(`api/users/${id}`).then(response => {
            return response.data;
        });
    },
    getPaged(params) {
        return axios.get(`api/users`, { params: params }).then(response => {
            return response.data;
        });
    },
    addUser(user) {
        return axios.post('api/users', user);
    },
    updateUser(user) {
        return axios.put(`api/users/${user.id}`, user);
    },
    delete(id) {
        return axios.delete(`api/users/${id}`);
    },
    updatePassword(id, userPassword) {
        return axios.put(`api/users/${id}/password`, userPassword);
    },
    enableUser(id) {
        return axios.post(`api/users/${id}/enable`);
    },
    disableUser(id) {
        return axios.post(`api/users/${id}/disable`);
    },
    getRoles(id) {
        return axios.get(`api/users/${id}/user-roles`).then(response => {
            return response.data;
        });
    },
    updateRole(id, role) {
        return axios.put(`api/users/${id}/user-roles`, role);
    },
    deleteRole(id) {
        return axios.delete(`api/users/${id}/user-roles`);
    },
    getPermissions(userId) {
        return axios.get(`api/users/${userId}/permissions `).then(response => {
            return response.data;
        });
    }
};
