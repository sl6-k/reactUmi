import { getLists } from '@/services/search'
export default {
    namespace: 'search',
    state: {
        text: 'dva',
        lists: []
    },
    //同步方法
    reducers: {
        getLists(state, action) {
            return {
                ...state,
                lists: action.payload
            }
        }
    },
    //异步方法
    effects: {
        * getListsAsync({ payload }, { call, put }) {
            const res = yield call(getLists, payload)
            yield put({
                type: 'getLists',
                payload: res.lists
            })
        }
    }
}