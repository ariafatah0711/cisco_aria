let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

let userChoice = prompt("What would you like to do? (first, last, new)");

if (userChoice === "first") {
  // Show the first contact
  if (contacts.length > 0) {
    console.log("First contact:", contacts[0]);
  } else {
    console.log("Contact list is empty.");
  }
} else if (userChoice === "last") {
  // Show the last contact
  if (contacts.length > 0) {
    console.log("Last contact:", contacts[contacts.length - 1]);
  } else {
    console.log("Contact list is empty.");
  }
} else if (userChoice === "new") {
  // Add a new contact
  let newName = prompt("Enter the name:");
  let newPhone = prompt("Enter the phone number:");
  let newEmail = prompt("Enter the email:");

  // Check if all necessary data is entered
  if (newName && newPhone && newEmail) {
    let newContact = {
      name: newName,
      phone: newPhone,
      email: newEmail,
    };
    contacts.push(newContact);
    console.log("New contact added:", newContact);
  } else {
    console.log("Incomplete data. Contact not added.");
  }
} else {
  console.log("Invalid choice. Please choose 'first', 'last', or 'new'.");
}
