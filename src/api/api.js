import base from './fetch'
const baseUrl = '/baseUrl'
export default class apiList extends base {
    static testGet(params) { // get请求
        const url = `${ baseUrl }/testUrl`
        return this.get(url, params)
    }
    static testPost(params) { // post请求
        const url = `${ baseUrl }/testUrl`
        return this.post(url, params)
    }
}
