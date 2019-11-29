import React, { Component } from "react";
import Search from "./Search";
import ContactList from "./ContactList";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  // initial state
  state = {
    contacts: contacts.slice(0, 5),
    query: ""
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.id !== contactId;
      })
    });
  };

  addContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];

    // checking if in this.state.contacts we already have the random contact
    if (
      this.state.contacts.find(contact => {
        return contact.id === random.id;
      })
    ) {
      if (this.state.contacts.length < contacts.length) {
        this.addContact();
      }
      return;
    }

    //   create a shallow copy
    const newContacts = [...this.state.contacts];
    newContacts.unshift(random);

    this.setState({
      contacts: newContacts
    });
  };

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sorted
    });
  };

  sortByPop = () => {
    const sorted = this.state.contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: sorted
    });
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };

  componentDidMount() {
    console.log("<App /> DID MOUNT");
  }

  componentDidUpdate() {
    console.log("<App /> DID UPDATE");
  }

  render() {
    console.log("<App /> RENDER");

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by popularity</button>

        <Search setQuery={this.setQuery} query={this.state.query} />

        <ContactList
          contacts={this.state.contacts}
          filterContacts={this.deleteContact}
          filter={this.state.query}
        />
      </div>
    );
  }
}

export default App;
