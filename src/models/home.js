import pathToRegexp from 'path-to-regexp';

import {fetchList,getBrandCampaignList} from '../services/home';

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
    changeDate (state, {payload: dateString}) {
      return {...state, date: dateString}
    }

  },
  effects: {
    *search({payload}, {call}) {
      let {data} = payload;
      yield call(fetchList, data);
    },
  },
  subscriptions: {
    setup({dispatch, history}) {

    },
  }
};