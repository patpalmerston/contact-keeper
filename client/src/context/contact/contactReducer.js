import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload]
			};
		// state.contacts is the current array and we want to use filter that takes ina function.
		// we are returning all the ids that are not in the payload. So delete uses filter to only delete the payload id and return all other id's
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.payload
				)
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
				}

		default:
			return state;
	}
};
