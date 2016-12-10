import axios from "axios";
import {parse, stringify} from "qs";

function handleError() {

}

function get(url, params) {
    return axios.get(url, {
        params: parse(params)
    }).then((response) => {
        if (response && response.data) {
            // auth(response.data);
            return response.data;
        } else {
            handleError()
        }
    }).then((res) => res).catch((error) => {
        console.error(error)
    })
}

function post(url, params) {
    return axios.post(url, stringify(params)).then((response) => {
        if (response && response.data) {
            // auth(response.data);
            return response.data;
        } else {
            handleError();
        }
    }).then((res) => res).catch((error) => {
        console.error(error)
    })
}

export {
    get,
    post
}