import React from 'react';
import { connect } from 'react-redux';
import {
    bindSelectUserElement,
    selectUser,
    openUserSelector,
    closeUserSelector
} from '../actions';
import {
    Menu,
    MenuItem,
    Button
} from 'material-ui';

const SelectUser = ({users, add_dealing_form, handleOpenUserSelector, handleCloseUserSelector, handleSelectUser, handleBindSelectUserElement}) => {
    let nodes = users.map(user => (
        <MenuItem
            key={user.id}
            selected={user.id === add_dealing_form.selected_user}
            onClick={event => {
                handleSelectUser(user.id);
                handleCloseUserSelector();
            }}
        >
            {user.name}
        </MenuItem>
    ));

    let selected_user = users.filter((user) => {
        return add_dealing_form.selected_user === user.id;
    });

    let button_name = selected_user.length ? selected_user.pop().name: 'Select';

    return (
        <div>
            <Button
                aria-owns={add_dealing_form.open ? 'simple-menu': null}
                aria-haspopup="true"
                onClick={event => {
                    handleBindSelectUserElement(event.currentTarget);
                    handleOpenUserSelector();
                }}
                raised
            >
                {button_name}
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={add_dealing_form.select_user_element}
                open={add_dealing_form.open}
                onRequestClose={handleCloseUserSelector}
            >
                {nodes}
            </Menu>
        </div>
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
        handleOpenUserSelector: () => {
            dispatch(openUserSelector());
        },
        handleCloseUserSelector: () => {
            dispatch(closeUserSelector());
        },
        handleSelectUser: (user) => {
            dispatch(selectUser(user));
        },
        handleBindSelectUserElement: (element) => {
            dispatch(bindSelectUserElement(element));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);
