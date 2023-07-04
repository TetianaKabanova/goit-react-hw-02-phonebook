import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(cont => cont.name === contact.name);

    if (existingContact) {
      alert(`Contact with name "${contact.name}" already exists!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter
            title="Find contact by name"
            onChange={this.handleFilterChange}
            value={this.state.filter}
          />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </Container>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  findContacts: PropTypes.func.isRequired,
  duplicationContacts: PropTypes.func.isRequired,
};
