import React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListItemSecondaryAction, ListItemText, IconButton } from 'material-ui';
import DeleteIcon from 'material-ui-icons/Delete';
import { removeDealing } from '../../actions';

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
                secondary={`金額: ${value}`}
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

const mapDispatchToProps = dispatch => {
    return {
        onClickRemove: id => {
            dispatch(removeDealing(id))
        }
    };
};

export default connect(null, mapDispatchToProps)(ListNode);
