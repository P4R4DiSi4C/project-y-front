import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'raviger';

export default ({ is: IsPrivate, component: Component }) => {
	const user = useSelector((state) => state.user);

	// CHECK IF COMPANY EXISTS + IF USER HAS RIGHTS
	if (user.token.length <= 0) {
		alert(user.token.length);
		return IsPrivate ? <Redirect to='/' /> : <Component />;
	}

	return IsPrivate ? <Component /> : <Redirect to='/dashboard' />;
};
