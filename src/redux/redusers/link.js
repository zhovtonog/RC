import { LOAD_PAGE } from '../constants/Constants';

const initialState = {
	initial: 200000,
	rate:5,
	years:25,
	monthlyOverpayment:0
};


export default function link(state = initialState, action) {
	
  switch (action.type) {
  case LOAD_PAGE:
	  return {
		  ...state,
	  }
  default:
    return state;
  }
}