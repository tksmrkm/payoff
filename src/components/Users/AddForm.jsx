import React from 'react';
import { connect } from 'react-redux';
import { addUser, resetUsers } from '../../actions';
import { row, wrapper } from '../../styles';
import { TextField, Button } from 'material-ui';

const AddForm = ({onSubmitAddUser, onResetUsers}) => {
    let input;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                onSubmitAddUser(input.value);
                input.value = '';
            }}
            style={wrapper}
        >
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
                type="submit"
            >Add</Button>
            <Button
                color="default"
                raised={true}
                style={row}
                onClick={onResetUsers}
            >Reset</Button>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddUser: name => {
            dispatch(addUser(name));
        },
        onResetUsers: () => {
            if (confirm('Reset Users')) {
                dispatch(resetUsers());
            }
        }
    };
};

export default connect(null, mapDispatchToProps)(AddForm);
