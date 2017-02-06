import auth from '../services/common.js';
import axios from "axios";
import {parse, stringify} from 'qs';

function get(url, params) {
    return axios.get(url, {
        params: parse(params)
    }).then((response) => {
        if (response && response.data) {
            // auth(response.data);
            return response.data;
        }
    }).then((res) => res).catch((error) => {
        console.error(error)
    })
}

function post(url, params) {
    return axios({url:url,params:stringify(params),method:'POST',
        headers: {"Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers":"Origin,X-Requested-With,Content-Type,Accept",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS","Content-Type":"application.json;charset=utf-8"
    }}).then((response) => {
        if (response && response.data) {
            // auth(response.data);
            return response.data;
        }
    }).then((res) => res).catch((error) => {
        console.error(error)
    })
}

function del(url, params) {
    return axios.delete(url, {
        params: parse(params)
    }).then(response => {
        if (response && response.data) {
            // auth(response.data);
            return response.data;
        }
    }).then((res) => res).catch((error) => {
        console.error(error)
    })
}

function put(url, params) {
    return axios.put(url, stringify(params)).then((response) => {
        if (response && response.data) {
            // auth(response.data);
            return response.data;
        }
    }).then((res) => res).catch((error) => {
        console.error(error)
    })
}

export {
    get,
    post,
    del,
    put
}