
import React, { Fragment, Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import NewStudentForm from "./NewStudentForm";
import axios from "axios";

import { API_URL } from "../constants";
import Detail from "./detail";


class DetailView extends Component {
  state = {
    modal: false
  };
  
  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Student Details";
    var button = <Button onClick={this.toggle}>Details</Button>;
      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Details       
        </Button>
      );
    
      return(
      <Fragment>
       {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <Detail
              resetState={this.props.resetState}
              toggle={this.toggle}
              student={this.props.student}
            />
          </ModalBody>
        </Modal>
      </Fragment>
      );
  }
}


export default DetailView;