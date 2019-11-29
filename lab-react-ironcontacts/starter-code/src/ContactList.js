import React from "react";

class Contact extends React.Component {
  componentDidMount() {
    console.log("<Contact/> DID MOUNT");
  }

  componentDidUpdate() {
    console.log("<Contact/> DID UPDATE");
  }

  componentWillUnmount() {
    console.log("<Contact/> WILL UNMOUNT");
  }

  render() {
    console.log("<Contact/> RENDER");
    const props = this.props;
    return (
      <tr>
        <td>
          <img
            src={props.contact.pictureUrl}
            height="100px"
            alt={props.contact.name}
          />
        </td>
        <td>{props.contact.name}</td>
        <td>{props.contact.popularity.toFixed(2)}</td>
        <td>
          <button onClick={() => props.filterContacts(props.contact.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

class ContactList extends React.Component {
  componentDidMount() {
    console.log("<ContactList/> DID MOUNT");
  }

  componentDidUpdate() {
    console.log("<ContactList/> DID UPDATE");
  }
  render() {
    console.log("<ContactList/> RENDER");
    const props = this.props;
    const filtered = props.contacts.filter(contact => {
      if (contact.name.toLowerCase().includes(props.filter.toLowerCase())) {
        return true;
      }
      return false;
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
              <Contact
                key={contact.id}
                contact={contact}
                filterContacts={props.filterContacts}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ContactList;
