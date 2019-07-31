import { StoreHours } from '../types';
import { actions } from '../actions/constants';

const initialState: StoreHours = {
  open: true
}

export const storeHours = (state = initialState, action: any) => {
  
  switch (action.type) {
    case actions.STORE_OPERATING:
      return {
        open: !state.open
      }
    default:
      return {
        ...state
      }
  }
};
