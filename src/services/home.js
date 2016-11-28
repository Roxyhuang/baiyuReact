import request from '../utils/request';

export async function fetchList(data) {
  return request('/api/home/fetchList', data);
}
