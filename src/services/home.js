import { get } from '../utils/request';

export async function fetchList(params) {
  return get('/api/home/fetchList', params);
}

//
// import axios from 'axios';
//
// export async function fetchList(data, cb) {
//     axios.get('/api/home/fetchList', {
//         params: data
//     })
//     .then(function (response) {
//         cb && cb(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// }
