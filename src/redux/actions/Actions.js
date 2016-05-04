import * as actions from '../constants/Constants';

export function loadCompanies(Companies) {
  return { type: actions.LOAD_COMPANIES, Companies};
}