(() => {
  const contactsLink = document.querySelector('[data-contacts]');
  const contactsLinkMobile = document.querySelector('[data-contacts-mobile]');

  const scrollToContacts = e => {
    e.preventDefault();

    const contactsSection = document.querySelector('#contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });

    contactsLink.blur();
    contactsLinkMobile.blur();
  };

  contactsLink.addEventListener('click', scrollToContacts);
  contactsLinkMobile.addEventListener('click', scrollToContacts);
})();
