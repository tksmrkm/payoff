import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from 'material-ui';

const MultipleSelector = ({users, add_dealing_form, handleChooseIgnoreUsers}) => {
    const user_nodes = users.map(user => {
        const selected = add_dealing_form.ignore_users.includes(user.id);
        return (
            <MenuItem
                key={user.id}
                value={user.id}
                selected={selected}
            >
                {user.name}
            </MenuItem>
        )
    });

    const id = "SelectIgnoreUsers";

    return (
        <FormControl
            fullWidth={true}
        >
            <InputLabel htmlFor={id}>IgnoreList</InputLabel>
            <Select
                multiple
                id={id}
                value={add_dealing_form.ignore_users}
                onChange={handleChooseIgnoreUsers}
            >
                {user_nodes}
            </Select>
        </FormControl>
    );
};

export default MultipleSelector;
