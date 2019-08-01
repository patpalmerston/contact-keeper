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
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact
	// Contact comes in and we send directly to the payload
	const addContact = contact => {
		//create random id with uuid
		contact.id = uuid.v4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact
	//needs to happen from the contactItem component becuase that is where the button is... method takes in the id andd the payload is the id
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	// Set Current Contact
	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Update Contact
	const updateContact = contact => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	// Filter Contacts
	const filterContacts = text => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};

	// Clear Filter
	const clearContacts = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		// when ever we want to add anything to through a component through context we need to add it to value
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current, // need to add the current part of state
				filtered: state.filtered, // need to add the filtered part of state
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearContacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
