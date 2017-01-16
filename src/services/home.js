import { get } from '../utils/request';

export async function getBrandCampaignList(params) {
    return get('/api/home/brandCampaignList', params);
}
export async function fetchTypeList(params) {
  return get('/api/home/fetchTypeList', params);
}

export async function fetchCityList(params) {
  return get('/api/home/cityList', params);
}
