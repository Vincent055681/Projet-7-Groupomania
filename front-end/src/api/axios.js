const Axios = require('axios');

Axios.defaults.baseURL = 'http://localhost:4200';
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.timeout = 60000;

const setRequestConfig = (queryParams) => {
    const source = Axios.CancelToken.source();
    let config = {
        cancelToken: source.token,
        params: {}
    }
    if (queryParams) {
        config.params = queryParams;
    }

    return config;
}

export const GET = async (url, queryParams = null) => {
    return await Axios.get(url, {...setRequestConfig(queryParams)})
}

export const POST = async (url, data = null, queryParams = null) => {
    return Axios.post(url, data, {...setRequestConfig(queryParams)})
}

export const DELETE = async (url, queryParams = null) => {
    return await Axios.delete(url, {...setRequestConfig(queryParams)})
}

export const PUT = async (url, data = null, queryParams = null) => {
    return Axios.put(url, data, {...setRequestConfig(queryParams)})
}