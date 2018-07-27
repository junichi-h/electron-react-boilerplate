// ボタンの複合クラス
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../button';
import { onNext, onPrev } from '../../actions';

const ButtonList = props => (
    <div>
      <Button label="prev" onClick={() => {
        // reducerに登録した関数呼ぶ
        props.onPrev();
      }} />
      <Button label="next" onClick={() => {
        // reducerに登録した関数呼ぶ
        props.onNext();
      }} />
    </div>
);

// reduxに繋げる
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ onNext, onPrev }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonList);
