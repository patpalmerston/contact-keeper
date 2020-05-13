import React, { useState, useContext, useEffect } from 'react';
// bring in the Context
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	// access to any methods or state with this variable
	const contactContext = useContext(ContactContext);
	// destructure addcontact and the current value
	const { addContact, clearCurrent, updateContact, current } = contactContext;
	// we want to fill the form based off the current value as soon as it is mounted. useeffect will mimic componentdidmount lifecycle method. This will add the data to the form that we want to edit
	useEffect(() => {
		if (current !== null) {
			setContact(current); // sets the state to the current contact for editing
		} else {
			// sets form back to default state
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal'
			});
		}
	}, [contactContext, current]); // add dependencies so this only happens when these two values change.

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
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}

		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal'
		});
	};

	const clearAll = () => {
		clearCurrent();
	};
// check form validation
	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>
				{current ? 'Edit Contact' : 'Add Contact'}
			</h2>
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
					value={current ? 'Edit Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
