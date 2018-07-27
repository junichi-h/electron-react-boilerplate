/* @flow */
import React, { Fragment } from 'react';
import { Sine, TweenLite } from 'gsap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { lifecycle } from 'recompose';
import { Transition, TransitionGroup } from 'react-transition-group';

import { sections } from '../constants/config';
import Loader from '../components/loader';
import Section from '../components/section';
import { hideLoading } from '../actions';
import ButtonList from '../components/molecules/button-list';

const Container = styled(TransitionGroup)`
  position: relative;
  box-sizing: border-box;
`;

const sectionComponents = sections.map(s => <Section text={s.text} bgColor={s.color} key={s.text} />);

const AppContainer = (props): React.Element => {
	const { isLoading, pageName, currentIndex } = props;
	const contents = isLoading ? <Loader /> : sectionComponents[currentIndex];
	const buttons = isLoading ? null : <ButtonList />;
	return (
		<Fragment>
			<Container>
				<Transition
						key={pageName}
						timeout={{
							enter: 1500,
							exit: 1500
						}}
						mountOnEnter
						unmountOnExit
						onEnter={(element) => {
							console.log(
									'%cEnter ------->',
									'color:#00aeef;background:#3f3f3f;padding:.25em;font-size:20px;font-weight:bold;'
							);
							TweenLite.fromTo(element, 1.2, {
								alpha: 0
							}, {
								alpha: 1,
								delay: .35,
								ease: Sine.easeIn
							});
							// props.onEnter(element, pageType);
						}}
						onExit={(element) => {
							console.log(
									'%cExit ------->',
									'color:#00aeef;background:#3f3f3f;padding:.25em;font-size:20px;font-weight:bold;'
							);
							TweenLite.to(element, 1.2, {
								alpha: 0,
								ease: Sine.easeOut
							});
							// props.onExit(element, pageType);
						}}

				>
					<div>
						{ contents }
					</div>
				</Transition>
        { buttons }
			</Container>
		</Fragment>
	);
};
// reduxに繋げる
const mapStateToProps = (state) => ({
	isLoading: state.section.isLoading,
	pageName: state.section.pageName,
	currentIndex: state.section.currentIndex
});
const mapDispatchToProps = dispatch =>
    bindActionCreators({
      hideLoading
		}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
		// ここからstateless function
    lifecycle({
      componentDidMount() {
        this.props.hideLoading();
      },
      componentWillReceiveProps(nextProps){
        console.log(
            '%ccomponentWillReceiveProps ---->',
            'color: #e55a76;background:#3f3f3f;font-size:20px;padding:.25em;'
        );
        console.log(nextProps);
      },
      shouldComponentUpdate(nextProps){
        return nextProps.pageName !== this.props.pageName;
      }
    })(AppContainer)
);
