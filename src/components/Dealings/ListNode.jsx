import React from 'react';
import {
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton
} from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';

const ListNode = ({ dealing,  onClickRemove }) => {
    const handleRemove = event => {
        if (confirm(`Remove: "${dealing.name}"`)) {
            onClickRemove(dealing.id);
        }
    }

    const localeString = num => {
        return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    };

    const value = localeString(dealing.value);

    return (
        <ListItem>
            <ListItemText
                primary={dealing.name}
                secondary={`金顝: ${value}`}
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

export default ListNode;
