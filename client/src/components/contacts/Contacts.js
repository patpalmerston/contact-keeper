import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts } = contactContext;

	// console.log('contacts', contacts);

	return (
		<Fragment>
			{console.log('contacts', contacts)}
			{contacts.map(contact => (
				<ContactItem key={contact.id} contact={contact} />
			))}
		</Fragment>
	);
};

export default Contacts;
