import React from "react";

const ContactList = props => {
  const filtered = props.contacts.filter(contact => {
    if (contact.name.toLowerCase().includes(props.filter.toLowerCase())) {
      return true;
    }
  });

  return (
    <table
      style={{
        marginLeft: "50%",
        transform: "translate(-50%)"
      }}
    >
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* filter the contacts by the `query` that is in the Search component */}
        {filtered.map(contact => {
          return (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  height="100px"
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => props.filterContacts(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
