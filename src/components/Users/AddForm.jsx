import React from 'react';
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

export default AddForm;
