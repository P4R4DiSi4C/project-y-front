// libs
import React, { useState } from 'react';

// components
import {
	Box,
	MaskedInput,
	Form,
	FormField,
	Button,
	TextInput,
	Heading,
} from 'grommet';

const CLIENT_FIELDS = {
	email: '',
	password: '',
	firstName: '',
	lastName: '',
	date: '',
	hour: '',
};

export default ({ uuid }) => {
	const [client_reg, setClientReg] = useState(CLIENT_FIELDS);

	return (
		<Box flex fill justify='center' align='center' direction='column'>
			<Box
				background='background_comp'
				round='small'
				pad='medium'
				border={{ color: 'border', size: 'xsmall' }}
				elevation='small'
				width={{ min: '30%' }}
				align='center'
			>
				<Form
					as='form'
					value={client_reg}
					onChange={(newValue) => {
						setClientReg(newValue);
					}}
				>
					<Heading level={3} margin={{ vertical: '6px', horizontal: '12px' }}>
						Nouveau rendez-vous
					</Heading>
					<FormField label='Prénom' name='firstName'>
						<TextInput name='firstName' />
					</FormField>
					<FormField label='Nom' name='lastName'>
						<TextInput name='lastName' />
					</FormField>
					<FormField label='Email' name='email' required>
						<MaskedInput
							name='email'
							mask={[
								{ regexp: /^[\w\-_.]+$/, placeholder: 'exemple' },
								{ fixed: '@' },
								{ regexp: /^[\w]+$/, placeholder: 'gmail' },
								{ fixed: '.' },
								{ regexp: /^[\w]+$/, placeholder: 'com' },
							]}
						/>
					</FormField>
					<FormField name='date' label='Date'>
						<TextInput name='date' />
					</FormField>
					<FormField name='hour' label='Heure'>
						<TextInput name='hour' />
					</FormField>
					<Box direction='row' justify='center' margin={{ top: 'medium' }}>
						<Button type='submit' label={'Inviter'} />
					</Box>
				</Form>
			</Box>
		</Box>
	);
};
