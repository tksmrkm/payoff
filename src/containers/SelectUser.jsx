import React from 'react';
import { connect } from 'react-redux';
import {
    bindSelectUserElement,
    selectUser,
    openUserSelector,
    closeUserSelector
} from '../actions';
import {
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Button
} from 'material-ui';

const SelectUser = ({users, add_dealing_form, handleOpenUserSelector, handleCloseUserSelector, handleSelectUser, handleBindElement}) => {
    const userList = {};
    const handleOnClick = event => {
        handleBindElement(event.currentTarget);
        handleOpenUserSelector();
    };
    let open = add_dealing_form.open;

    return (
        <div>
            <List>
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="Select"
                    onClick={handleOnClick}
                >
                    <ListItemText
                        primary={userList[add_dealing_form.selected_user] ? userList[add_dealing_form.selected_user] : '-'}
                        secondary="Select"
                    />
                </ListItem>
            </List>
            <Button
                aria-owns={add_dealing_form.open ? 'simple-menu': null}
                aria-haspopup="true"
                onClick={handleOnClick}
                raised
            >
                {userList[add_dealing_form.selected_user] ? userList[add_dealing_form.selected_user] : 'Select'}
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={add_dealing_form.select_user_element}
                open={add_dealing_form.open}
                onRequestClose={handleCloseUserSelector}
            >
                {users.map((user, index) => {
                    userList[user.id] = user.name;
                    return (
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
                    );
                })}
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
        handleBindElement: (element) => {
            dispatch(bindSelectUserElement(element));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);
