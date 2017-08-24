import React from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Checkbox
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import { toggleUser, removeUser } from '../../actions';

const ListNode = ({ key, user_id, users, onClickToggle, onClickRemove }) => {
    let check;

    const user = users.filter(user => {
        return user.id === user_id;
    }).pop();

    const handleToggle = (event) => {
        onClickToggle(user.id);
    };

    const handleRemove = event => {
        if (confirm(`Remove: "${user.name}"`)) {
            onClickRemove(user.id);
        }
    }

    const localeString = num => {
        return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    };

    const expense = localeString(user.expense);
    const gain = localeString(user.gain);

    return (
        <ListItem
            button
            onClick={handleToggle}
        >
            <Checkbox
                onChange={handleToggle}
                checked={user.done}
                inputRef={node => {
                    check = node;
                }}
            />
            <ListItemText
                primary={user.name}
                secondary={`出費: ${expense} | 清算額: ${gain}`}
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

const mapStateToProps = ({users}) => {
    return {
        users
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

export default connect(mapStateToProps, mapDispatchToProps)(ListNode);
