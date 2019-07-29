import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Jill Johnson',
				email: 'jill@gmail.com',
				phone: '111-111-1111',
				type: 'personal'
			},
			{
				id: 2,
				name: 'Bill Terry',
				email: 'bill@gmail.com',
				phone: '111-222-2222',
				type: 'personal'
			},
			{
				id: 3,
				name: 'Sarah Monastus',
				email: 'sarah@gmail.com',
				phone: '333-333-3333',
				type: 'professional'
			}
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filters

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
