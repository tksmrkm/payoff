import React from 'react';
import { connect } from 'react-redux';
import {
    selectUser
} from '~/actions';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from 'material-ui';

const SelectUser = ({users, add_dealing_form, handleSelectUser}) => {
    let nodes = users.map(user => (
        <MenuItem
            key={user.id}
            value={user.id}
            selected={user.id === add_dealing_form.selected_user}
        >
            {user.name}
        </MenuItem>
    ));

    const id = "SelectDealingUser";

    return (
        <FormControl
            fullWidth={true}
        >
            <InputLabel htmlFor={id}>Select</InputLabel>
            <Select
                id={id}
                value={add_dealing_form.selected_user}
                onChange={handleSelectUser}
            >
                {nodes}
            </Select>
        </FormControl>
    );
};

const mapStateToProps = ({users, add_dealing_form}) => {
    return {
        users,
        add_dealing_form
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSelectUser: (event) => {
            dispatch(selectUser(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);
