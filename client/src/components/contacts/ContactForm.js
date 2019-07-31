import React, { useState, useContext } from 'react';
// bring in the Context
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	// access to any methods or state with this variable
	const contactContext = useContext(ContactContext);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal'
	});

	const { name, email, phone, type } = contact;

	// taking state and spreading in a copy of existing state, grabing the value of name and updaiting it with the value
	const onChange = e =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	// onSubmit will prevent auto refresh, then grab addContact from context and feed it the current value of state, then reset the form with the default value of state in the setter
	const onSubmit = e => {
		e.preventDefault();
		contactContext.addContact(contact);
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal'
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>Add Contact</h2>
			<input
				type='text'
				placeholder='name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='phone'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				value='personal'
				checked={type === 'personal'}
				onChange={onChange}
			/>{' '}
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			Professional
			<div>
				<input
					type='submit'
					value='Add Contact'
					className='btn btn-primary btn-block'
				/>
			</div>
		</form>
	);
};

export default ContactForm;
