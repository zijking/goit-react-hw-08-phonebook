export const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const { items, filter } = state.contacts;
  // console.log('items: ', items);
  // console.log('state: ', state);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return visibleContacts;
};
