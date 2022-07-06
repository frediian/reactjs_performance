import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h3>{contact.name}</h3>
      <h3>{contact.last_name}</h3>
      <h3>{contact.email}</h3>
      <h4>This user is : {contact.online ? "Contact Online" : "Contact Unavailable" }</h4>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
