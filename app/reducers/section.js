/* @flow */
import produce from 'immer';
import { sections } from '../constants/config';

export const HIDE_LOADING = '@@section/HIDE_LOADING';
export const NEXT = '@@section/NEXT';
export const PREV = '@@section/PREV';

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
  	  case HIDE_LOADING:
          draft.isLoading = action.payload.isLoading;
          draft.pageName = action.payload.pageName;
  	  	break;
      case NEXT :
      case PREV :
          draft.currentIndex = action.payload.currentIndex;
          draft.pageName = action.payload.pageName;
        break;
  	}
  });

export const hideLoading = () => {
  return dispatch => {
    window.setTimeout(() => {
      dispatch({
        type: HIDE_LOADING,
        payload: {
          isLoading: false,
          pageName: 'section-0'
        }
      })
    }, 1000);
  };
};

export const onNext = () => {
  return (dispatch, getState) => {
    const prevIndex = getState().section.currentIndex;
    const currentIndex = Math.min(prevIndex + 1, sections.length - 1);
    dispatch({
      type: NEXT,
      payload: {
        currentIndex,
        pageName: `section-${currentIndex}`
      }
    })
  }
};

export const onPrev = () => {
  return (dispatch, getState) => {
    const prevIndex = getState().section.currentIndex;
    const currentIndex = Math.min(prevIndex - 1, sections.length - 1);
    dispatch({
      type: PREV,
      payload: {
        currentIndex,
        pageName: `section-${currentIndex}`
      }
    })
  }
};


