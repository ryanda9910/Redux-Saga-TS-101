import { GET_USER_REQ, GET_USER_SUCCESS } from '../Action';

type State={
  data:Array<any>,
  isloading:Boolean,
}

const initialState:State={
 data:[],
 isloading:false,
}

const userReducer=(state=initialState,action:any)=>{
  switch(action.type){
    case GET_USER_SUCCESS:
      return{
       ...state,
       isloading:false,
       data:action.data.data.results
      }
    case GET_USER_REQ:
      return{
       ...state,
       isloading:true,
      }
    default:
      return state;
  }
}
export default userReducer;