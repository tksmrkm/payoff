import React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListItemSecondaryAction, ListItemText, IconButton } from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import { disabled } from '../styles';
import { toggleUser, removeUser } from '../actions';

const UserListNode = ({ user, onClickToggle, onClickRemove }) => {
    const handleToggle = (event) => {
        onClickToggle(user.id);
    };

    const handleRemove = event => {
        if (confirm(`Remove: "{user.name}"`)) {
            onClickRemove(user.id);
        }
    }

    const style = user.done ? disabled: {};

    return (
        <ListItem
            button
            onClick={handleToggle}
            style={style}
        >
            <ListItemText
                primary={user.name}
            />
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Remove"
                    onClick={handleRemove}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickToggle: id => {
            dispatch(toggleUser(id))
        },
        onClickRemove: id => {
            dispatch(removeUser(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListNode);
