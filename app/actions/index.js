import { sections } from '../constants/config';

export const HIDE_LOADING = '@@section/HIDE_LOADING';
export const NEXT = '@@section/NEXT';
export const PREV = '@@section/PREV';

/**
 * loading消す
 * @returns {Function}
 */
export const hideLoading = () => {
  return dispatch => {
    window.setTimeout(() => {
      dispatch({
        type: HIDE_LOADING,
        payload: {
          isLoading: false,
          pageName: 'section-0'
        }
      });
    }, 1000);
  };
};

/**
 * 次へ
 * @returns {Function}
 */
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
    });
  };
};

/**
 * 戻る
 * @returns {Function}
 */
export const onPrev = () => {
  return (dispatch, getState) => {
    const prevIndex = getState().section.currentIndex;
    const currentIndex = Math.max(Math.min(prevIndex - 1, sections.length - 1), 0);
    dispatch({
      type: PREV,
      payload: {
        currentIndex,
        pageName: `section-${currentIndex}`
      }
    })
  }
};
