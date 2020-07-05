import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';

const RegisterForm = ({ editable, showModal }) => {
  if (editable) {
    return null;
  }
  return (
    <Form
      layout="inline"
    >
      <Form.Item name={['user', 'name']} label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={showModal}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

RegisterForm.propTypes = {
  editable: PropTypes.bool,
  showModal: PropTypes.bool,
};

RegisterForm.defaultProps = {
  editable: false,
  showModal: false,
};

export default RegisterForm;
