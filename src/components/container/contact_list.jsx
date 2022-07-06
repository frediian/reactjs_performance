import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {

  const defaultContact = new Contact (
    'first name',
    'last name',
    'email@addres.com',
    false
  )

  return (
    <div>
      <ContactComponent contact={defaultContact} />
    </div>
  );
};

export default ContactListComponent;
