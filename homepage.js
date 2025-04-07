// JavaScript code to add smooth scrolling effect for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.getElementById('emergencyTab').addEventListener('click', function() {
    var emergencySound = document.getElementById('emergencySound');
    emergencySound.play();
});
const maxContacts = 5;
let contacts = [];

// Add Contact
document.getElementById("addContactBtn").addEventListener("click", () => {
  const contactsInput = document.getElementById("contactsInput").value;
  const newContacts = contactsInput.split(',').map(contact => contact.trim()).filter(contact => contact !== "");
  
  if (newContacts.length + contacts.length > maxContacts) {
    alert(`You can only add a maximum of ${maxContacts} contacts.`);
  } else {
    contacts = [...contacts, ...newContacts];
    updateContactsDisplay();
  }

  document.getElementById("contactsInput").value = '';  // Clear input field
});

// Send Alert
document.getElementById("sendAlertBtn").addEventListener("click", () => {
  if (contacts.length === 0) {
    alert("No contacts to send alert to.");
  } else {
    alert(`Alert sent to: ${contacts.join(', ')}`);
  }
});

// Update the Contacts Display
function updateContactsDisplay() {
  const contactListUl = document.getElementById("contactListUl");
  contactListUl.innerHTML = '';  // Clear the list before updating
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = `${contact} `;
    
    // Create Update and Delete buttons for each contact
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      // Delete contact from the array
      contacts.splice(index, 1); 

      // Update the contacts in localStorage
      localStorage.setItem("emergencyContacts", JSON.stringify(contacts));

      // Update the contact list display after deletion
      updateContactsDisplay();  
    });

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.addEventListener("click", () => {
      const newContact = prompt("Enter new contact:", contact);
      if (newContact) {
        contacts[index] = newContact;  // Update contact
        localStorage.setItem("emergencyContacts", JSON.stringify(contacts));  // Save updated list to localStorage
        updateContactsDisplay();  // Refresh the display
      }
    });

    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);
    contactListUl.appendChild(li);
  });
}

// Load saved contacts on page load
window.onload = () => {
  const savedContacts = JSON.parse(localStorage.getItem("emergencyContacts"));
  if (savedContacts && savedContacts.length) {
    contacts = savedContacts;
    updateContactsDisplay();
  }
};

