// libs
import React from 'react';
import Styled from 'styled-components';
import { usePath, A } from 'hookrouter';

export default ({ className, children, href, exact }) => {
	const path = usePath();
	const active = exact ? path === href : path.includes(href);

	const ActiveLink = Styled(A)`
    text-decoration: none;
    color: ${active ? 'green' : 'black'};
  `;

	return (
		<ActiveLink className={className} href={href}>
			{children}
		</ActiveLink>
	);
};
