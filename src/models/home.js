import pathToRegexp from 'path-to-regexp';

import {getBrandCampaignList,fetchTypeList,fetchCityList} from '../services/home';

export default {
  namespace: 'home',
  state: {
    isFetching: false,
    exception: null,
    brandCampaignList: [],
    cityList: [],
    typeList: [],

  },
  reducers: {
    changeDate (state, { payload: dateString }) {
      return { ...state, date: dateString }
    },
    getBrandList(state, { payload:{ data:content } }){
      return { ...state, brandCampaignList:content.data };
    },
    getTypeList(state, { payload:{ data:content } }){
      return { ...state, typeList:content.data };
    },
    getCityList(state, { payload:{ data:content } }){
      return { ...state, cityList:content.data };
    },

  },
  effects: {
    *fetchBrand({ payload },{ call, put }) {
      const  data  = yield call(getBrandCampaignList);
      yield put({ type: 'getBrandList', payload: { data } });
    },
    *fetchTypeList({ payload },{ call, put }) {
      const  data  = yield call(fetchTypeList);
      yield put({ type: 'getTypeList', payload: { data } });
    },
    *fetchCityList({ payload },{ call, put }) {
      const  data  = yield call(fetchCityList);
      yield put({ type: 'getCityList', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
       history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({type:'auth'});
          dispatch({ type: 'fetchBrand'});
          dispatch({type:'fetchTypeList'});
          dispatch({type:'fetchCityList'});
        }
      });
    },
  }
};