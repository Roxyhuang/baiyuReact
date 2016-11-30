import dva from 'dva';

export default {
    namespace: 'typeCampaign',
    state: [],
    reducers: {
        'delete'(state, {payload: id}) {
            return state.filter(item => item.id !== id);
        },
    },
}