import React from 'react';

import { Modal } from 'antd';

import RegisterForm from './RegisterForm';
import EditButton from './EditButton';
import UserListTable from './UserListTable';

class MyContent extends React.Component {
  state = { visible: false, editable: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  toggleEditable = () => {
    this.setState((prevState) => ({
      editable: !prevState.editable,
    }));
  }

  render() {
    const { editable, visible } = this.state;

    return (
      <div>
        <RegisterForm
          editable={editable}
          showModal={this.showModal}
        />
        <EditButton
          editable={editable}
          toggle={this.toggleEditable}
          showModal={this.showModal}
        />
        <UserListTable />
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default MyContent;
