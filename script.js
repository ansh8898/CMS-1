// JavaScript code for interacting with the CMS interface
const contactForm = document.getElementById('add-contact-form');
const contactsList = document.getElementById('contacts');

// Dummy data for initial contact list
let contacts = [
    { id: 1, name: 'Alice', email: 'alice@example.com', phone: '111-111-1111' },
    { id: 2, name: 'Bob', email: 'bob@example.com', phone: '222-222-2222' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', phone: '333-333-3333' },
    { id: 4, name: 'David', email: 'david@example.com', phone: '444-444-4444' },
    { id: 5, name: 'Eve', email: 'eve@example.com', phone: '555-555-5555' },
    { id: 6, name: 'Frank', email: 'frank@example.com', phone: '666-666-6666' },
    { id: 7, name: 'Grace', email: 'grace@example.com', phone: '777-777-7777' },
    { id: 8, name: 'Hannah', email: 'hannah@example.com', phone: '888-888-8888' },
    { id: 9, name: 'Isaac', email: 'isaac@example.com', phone: '999-999-9999' },
    { id: 10, name: 'Jack', email: 'jack@example.com', phone: '101-010-1010' },

];

// Function to display contacts in the list
function displayContacts() {
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
    id: contacts.length + 1,
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone')
  };
  contacts.push(newContact);
  displayContacts();
  contactForm.reset();
}

// Event listener for submitting the contact form
contactForm.addEventListener('submit', addContact);

// Initial display of contacts
displayContacts();
