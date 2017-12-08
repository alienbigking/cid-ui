import axios from 'axios'
import resCode from './resCode'

let state = ''

const handleApiErr = (res) => {
    let prev = resCode[res.status === 200 ? res.data.code : res.status]
    if (!prev) return res.data
    prev.do && prev.do(res.data)
    if (prev.next !== false) return res.data
}

axios.interceptors.request.use(
    config => {
        state = history.state
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => {
        if (state && history.state.key !== state.key) return
        return handleApiErr(response)
    },
    error => {
        if (error.response) {
            if (state && history.state.key !== state.key) return
            return handleApiErr(error.response)
        }
    }
)
class http {
    static request(method, url, data) {
        let options = method === 'get' ? 'params' : 'data'
        const header = this.setHeader()
        const params = {
            method: method,
            // baseURL: 'http://10.10.10.140:8080',
            baseURL: 'http://10.10.10.116:8080',
            headers: header,
            withCredentials: true,
            // [options]: data,
            url: url
        }
        params[options] = data
        params.auth = {
            username: 'cid',
            password: '25d5e2e9b0ed47bbb9d4b82f4abc8c09'
        }
        console.log(params)
        return axios(params).then(res => res)
    }
    static setHeader() {
        const header = { 'Content-Type': 'application/x-www-form-urlencoded' }
        if (sessionStorage.getItem('access_token')) {
            header.common = header.common || {}
            header.common['Authorization'] = `Bearer ${ sessionStorage.getItem('access_token') }`
        }
        return header
    }
    static get(url, data) {
        return this.request('get', url, data)
    }
    static delete(url, data) {
        return this.request('delete', url, data)
    }
    static head(url, data) {
        return this.request('head', url, data)
    }
    static options(url, data) {
        return this.request('options', url, data)
    }
    static post(url, data) {
        return this.request('post', url, data)
    }
    static put(url, data) {
        return this.request('put', url, data)
    }
    static patch(url, data) {
        return this.request('patch', url, data)
    }
}

export default class base {
    static get = http.get.bind(http)
    static delete = http.delete.bind(http)
    static head = http.head.bind(http)
    static options = http.options.bind(http)
    static post = http.post.bind(http)
    static put = http.put.bind(http)
    static patch = http.patch.bind(http)
}
