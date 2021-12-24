import React, { useState, useEffect } from "react";

const Composer = ({ children, transition: Transition, transitionDuration, onFinishCallback }) => {
	/** Track which element should be animated */
	const [tick, setTick] = useState(-1);

	/** Stores children with animation to be rendered */
	const [childrenToRender, setChildrenToRender] = useState([]);

	/** Checks the passed props and starts iterating */
	useEffect(() => {
		setTick(-1);
		setChildrenToRender([]);
	}, []);

	useEffect(() => {
		const updatedChildren = children.map((child, index) => {
			return index === tick ? (
				<Transition
					key={`animated-child-${index}`}
					duration={transitionDuration}
				>
					{child}
				</Transition>
			) : index < tick ? (
				child
			) : null;
		});

		/** Filters null children, to prevent unnecessary iterations */
		setChildrenToRender(updatedChildren.filter(child => !!child));
	}, [tick, children, transitionDuration]);

	useEffect(() => {
		onFinishCallback && onFinishCallback();
	}, [tick, onFinishCallback]);

	useEffect(() => {
		if (tick < children.length) {
			setTimeout(() => {
				setTick(tick + 1);
			}, transitionDuration);
		}
	}, [childrenToRender, children.length, tick, transitionDuration]);

	return childrenToRender;
};

export default Composer;
