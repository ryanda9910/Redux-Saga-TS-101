import {call, put, takeLatest} from 'redux-saga/effects'
import {GET_USER_REQ, GET_USER_SUCCESS} from './Action'
import { fetchUser } from './Services'


function* rootSaga(){
  yield takeLatest(GET_USER_REQ,getAlluser)
}

function getAllData(data:any):any{
  return{
    type:GET_USER_SUCCESS,
    data
  }
}
export function reqData(){
   return{
     type:GET_USER_REQ,
   }
}

export function* getAlluser(){
  try {
    const data = yield call(fetchUser)
    yield put(getAllData(data))
  } catch (error) {
    return error
  }
}


export default rootSaga

