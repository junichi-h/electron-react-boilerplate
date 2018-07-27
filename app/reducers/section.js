/* @flow */
import produce from 'immer';

import { HIDE_LOADING, NEXT, PREV } from '../actions';

type State = {
  isLoading: boolean;
  currentIndex: number;
  pageName: string;
};

const initialState: State = {
  isLoading: true,
  currentIndex: 0,
  pageName: 'loading'
};

export default (state = initialState, action) =>
  produce(state, draft => {
  	switch(action.type) {
  	  // ローディング消す
  	  case HIDE_LOADING:
          draft.isLoading = action.payload.isLoading;
          draft.pageName = action.payload.pageName;
  	  	break;
  	  // page遷移
      case NEXT :
      case PREV :
          draft.currentIndex = action.payload.currentIndex;
          draft.pageName = action.payload.pageName;
        break;
  	}
  });
