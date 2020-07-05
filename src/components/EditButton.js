import React from 'react';
import PropTypes from 'prop-types';

import {
  Form, Input, Button, Modal, Table, Tag, Space,
} from 'antd';

const EditButton = ({ editable, toggle, showModal }) => (editable
  ? (
    <>
      <Button type="primary" onClick={showModal}>
        Confirm
      </Button>
      <Button type="primary" onClick={toggle}>
        Cancel
      </Button>
    </>
  )
  : (
    <Button type="primary" onClick={toggle}>
      Edit
    </Button>
  ));

EditButton.propTypes = {
  editable: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

EditButton.defaultProps = {
  editable: false,
};

export default EditButton;
