import React, { useReducer } from 'react';
import axios from 'axios';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
	CONTACT_ERROR,
	CLEAR_FILTER
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: null,
		current: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Get Contacts
	const getContacts = async () => {
		//create random id with uuid
		try {
			const res = await axios.get('/api/contacts');

			dispatch({
				type: GET_CONTACTS,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Add Contact
	// Contact comes in and we send directly to the payload
	const addContact = async contact => {
		//create random id with uuid
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post('/api/contacts', contact, config);

			dispatch({
				type: ADD_CONTACT,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Delete Contact
	//needs to happen from the contactItem component becuase that is where the button is... method takes in the id andd the payload is the id
	const deleteContact = async id => {
		try {
			await axios.delete(`/api/contacts/${id}`);

			dispatch({
				type: DELETE_CONTACT,
				payload: id
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Clear Contacts
	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS });
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
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		// when ever we want to add anything to through a component through context we need to add it to value
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current, // need to add the current part of state
				filtered: state.filtered, // need to add the filtered part of state
				error: state.error,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
				getContacts,
				clearContacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
