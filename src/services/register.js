import { post } from '../utils/request';

export async function register(params) {
  return post('http://61.132.72.202:2020/BAIYU.Web.Api/api/Users/Register', params);
}