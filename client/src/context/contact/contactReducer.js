import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	CLEAR_CONTACTS,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CONTACT_ERROR,
	CLEAR_FILTER
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
				loading: false
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
				loading: false
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(contact =>
					contact.id === action.payload.id ? action.payload : contact
				),
				loading: false
			};
		// state.contacts is the current array and we want to use filter that takes ina function.
		// we are returning all the ids that are not in the payload. So delete uses filter to only delete the payload id and return all other id's
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.payload
				),
				loading: false
			};
		case CLEAR_CONTACTS:
			return {
				...state,
				contacts: null,
				filtered: null,
				error: null,
				current: null
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};
		case FILTER_CONTACTS:
			return {
				...state,
				filtered: state.contacts.filter(contact => {
					// regular expression set to new regex that is just the text we want to match from the payload and gi is global and case insensitive.
					const regex = new RegExp(`${action.payload}`, 'gi');
					// we want to return the individual name with match against the reg expression. that returns anything that matches the text that is passed in from the action payload. We also added the email.
					return contact.name.match(regex) || contact.email.match(regex);
				})
			};
		// now we want to clear the filter
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null
			};
		case CONTACT_ERROR:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};
