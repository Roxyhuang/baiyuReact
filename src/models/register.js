import { register } from '../services/register';

export default {
  namespace: 'register',
  state: {
    isFetching: false,
    exception: null,
  },
  reducers: {
    register(state, { payload:{ data:content } }){
      return { ...state, msg:content };
    },
  },
  effects: {
    *register({ payload },{ call, put }) {
      const  data  = yield call(register);
      yield put({ type: 'register', payload: { data } });
    },
  },
  subscriptions: {

  },
}