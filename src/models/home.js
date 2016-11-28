import pathToRegexp from 'path-to-regexp';

import {fetchList} from '../services/home';

export default {
  namespace: 'home',
  state: {

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