import pathToRegexp from 'path-to-regexp';

import {getBrandCampaignList} from '../services/home';

export default {
  namespace: 'home',
  state: {
    isFetching: false,
    exception: null,
    typeCampaign: {},
    brandCampaign: {},
    appCampaign: {},

  },
  reducers: {
    changeDate (state, { payload: dateString }) {
      return { ...state, date: dateString }
    },
    getBrand(state, { payload:{ data:brandCampaign } }){
      return { ...state, brandCampaign};
    }

  },
  effects: {
    // *search({ payload }, { call }) {
    //   let { data } = payload;
    //   yield call(homeService.fetchList, data);
    // },
    *fetchBrand({payload},{ call, put }) {
      const { data } = yield call(getBrandCampaignList);
      yield put({ type: 'getBrand', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
       history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetchBrand'});
        }
      });
    },
  }
};