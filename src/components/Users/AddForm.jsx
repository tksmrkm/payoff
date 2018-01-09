import React from 'react';
import { connect } from 'react-redux';
import { addUser, resetUsers } from '~/actions';
import { wrapper } from '~/styles';
import { TextField, Button, Grid } from 'material-ui';

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
        >
            <Grid container={true}>
                <Grid item xs={12}>
                    <TextField
                        inputRef={node => {
                            input = node;
                        }}
                        label="Name"
                        fullWidth={true}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        color="primary"
                        raised={true}
                        type="submit"
                    >Add</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        color="default"
                        onClick={onResetUsers}
                    >Reset</Button>
                </Grid>
            </Grid>
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
