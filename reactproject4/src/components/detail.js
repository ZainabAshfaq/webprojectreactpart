

import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class Detail extends React.Component {
  state = {
    pk: 0,
    firstName: "",
    lastName: "",
    registrationDate: "",
  };

  componentDidMount() {
    if (this.props.student) {
      const { pk, firstName, lastName, registrationDate } = this.props.student;
      this.setState({ pk, firstName, lastName, registrationDate });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="firstName">First Name:</Label>
          <Input
            type="text"
            name="firstName"
            value={this.defaultIfEmpty(this.state.firstName)}
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name:</Label>
          <Input
            type="text"
            name="lastName"
            value={this.defaultIfEmpty(this.state.lastName)}
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label for="registrationDate">Registration Date:</Label>
          <Input
            type="date"
            name="registrationDate"
            value={this.defaultIfEmpty(this.state.registrationDate)}
            readOnly
          />
        </FormGroup>
        <Button className="view">GoBack</Button>
      </Form>
    );
  }
}

export default Detail;
