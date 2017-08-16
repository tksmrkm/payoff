import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import { row } from '../styles';
import { TextField, Button } from 'material-ui';

const AddUserForm = ({onSubmitAddUser}) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return
            }
            onSubmitAddUser(input.value);
            input.value = '';
        }}>
            <TextField
                inputRef={node => {
                    input = node;
                }}
                label="Name"
                fullWidth={true}
                required={true}
                style={row}
            />
            <Button
                color="primary"
                raised={true}
                style={row}
            >Add User</Button>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddUser: name => {
            dispatch(addUser(name));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddUserForm);