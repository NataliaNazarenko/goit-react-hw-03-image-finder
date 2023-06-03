import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, Form, Input, Span, SubmitButton, Icon } from './Searchbar.styled.jsx';

export class Searchbar extends React.Component {
  state = {
    searchQuery: '',
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.searchQuery.value.trim();

    this.props.onSubmit(data);
    e.target.reset();
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SubmitButton type="submit">
            <Icon>
              <AiOutlineSearch />
            </Icon>
            <Span>Search</Span>
          </SubmitButton>
          <Input
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.inputValue}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
