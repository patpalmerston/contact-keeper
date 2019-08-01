import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	// Were pulling out contacts and filtered
	const { contacts, filtered } = contactContext;

	// console.log('contacts', contacts);

	if (contacts.length === 0) {
		return <h4>Please add a contact</h4>;
	}

	// now inside the return we check to see if there is anything inside filtered. If there is, if not null, then we map throu that and show contact item. If there is nothing in filtered then we show the contacts.
	return (
		<Fragment>
			{filtered !== null
				? filtered.map(contact => (
						<ContactItem key={contact.id} contact={contact} />
				  ))
				: contacts.map(contact => (
						<ContactItem key={contact.id} contact={contact} />
				  ))}
		</Fragment>
	);
};

export default Contacts;
