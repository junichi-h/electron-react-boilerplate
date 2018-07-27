import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../button';
import { onNext, onPrev } from '../../reducers/section';

const ButtonList = props => (
    <div>
      <Button label="prev" onClick={() => {
        props.onPrev();
      }} />
      <Button label="next" onClick={() => {
        props.onNext();
      }} />
    </div>
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators({ onNext, onPrev }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonList);
