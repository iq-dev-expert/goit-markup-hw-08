(() => {
  const contactsLink = document.querySelector('[data-contacts]');

  const scrollToContacts = e => {
    e.preventDefault();

    const contactsSection = document.querySelector('#contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });

    contactsLink.blur();
  };

  contactsLink.addEventListener('click', scrollToContacts);
})();
