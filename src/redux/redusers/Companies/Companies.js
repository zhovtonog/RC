import { LOAD_COMPANIES } from 'redux/constants/Constants';

const initialState = {
    companies : [],
    rowCount : 50,
    orderBy : '',
    filter : []
};


export default function Companies (state = initialState, action) {
	
  switch (action.type) {
  case LOAD_COMPANIES:
	  return {
		  ...state, companies : action.Companies
	  }
  default:
    return state;
  }
}