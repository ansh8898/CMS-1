// JavaScript code for interacting with the CMS interface
const contactForm = document.getElementById('add-contact-form');
const contactsList = document.getElementById('contacts');

// Function to display contacts in the list
function displayContacts() {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contactsList.innerHTML = '';
  contacts.forEach(contact => {
    const contactItem = document.createElement('div');
    contactItem.innerHTML = `
      <strong>${contact.name}</strong><br>
      Email: ${contact.email}<br>
      Phone: ${contact.phone}<br><br>
    `;
    contactsList.appendChild(contactItem);
  });
}

// Function to add a new contact
function addContact(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const newContact = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone')
  };
  let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(newContact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  displayContacts();
  contactForm.reset();
}

// Event listener for submitting the contact form
contactForm.addEventListener('submit', addContact);

// Initial display of contacts
displayContacts();
