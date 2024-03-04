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

// Fungsi untuk menampilkan kontak berdasarkan nomor indeks
function showContact(contactList, index) {
  if (
    contactList instanceof Array &&
    index >= 0 &&
    index < contactList.length
  ) {
    console.log(contactList[index]);
  } else {
    console.log(
      "Invalid input. Please provide a valid contact list and index."
    );
  }
}

// Fungsi untuk menampilkan semua kontak
function showAllContacts(contactList) {
  if (contactList instanceof Array) {
    contactList.forEach((contact) => console.log(contact));
  } else {
    console.log("Invalid input. Please provide a valid contact list.");
  }
}

// Fungsi untuk menambahkan kontak baru
function addNewContact(contactList, newName, newPhone, newEmail) {
  if (contactList instanceof Array && newName && newPhone && newEmail) {
    const newContact = {
      name: newName,
      phone: newPhone,
      email: newEmail,
    };
    contactList.push(newContact);
    console.log("New contact added:", newContact);
  } else {
    console.log(
      "Invalid input. Please provide a valid contact list and new contact details."
    );
  }
}

// Contoh pemanggilan fungsi
showContact(contacts, 1);
showAllContacts(contacts);
addNewContact(contacts, "John Doe", "123-456-7890", "john.doe@example.com");
