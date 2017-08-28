import React from 'react';
import { connect } from 'react-redux';
import { selectUser, toggleUserSelector } from '../../actions';
import {
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    Button
} from 'material-ui';

const SelectUser = ({users, form_dealing, toggleOpen, selectUser}) => {
    return (
        <div>
            <Button
                raised={true}
                onClick={() => {
                    toggleOpen(!form_dealing.open);
                    console.log(form_dealing);
                }}
            >
                Button {form_dealing.selected_user ? ' ' + form_dealing.selected_user: false}
            </Button>
            <Dialog
                onRequestClose={() => {
                    toggleOpen(!form_dealing.open);
                }}
                open={form_dealing.open}
            >
                <DialogTitle>DialogTitle</DialogTitle>
                <List>
                    {users.map(user => 
                        <ListItem
                            button
                            onClick={() => {
                                selectUser(user.id);
                                toggleOpen(!form_dealing.open);
                                console.log('ListItem was clicked: ', user.id, form_dealing);
                            }}
                            key={user.id}
                        >
                            <ListItemText primary={user.name} />
                        </ListItem>
                    )}
                </List>
            </Dialog>
        </div>
    );
};

const mapStateToProps = ({users, form_dealing}) => {
    return {
        users,
        form_dealing
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleOpen: (state) => {
            dispatch(toggleUserSelector(state));
        },
        selectUser: (user) => {
            dispatch(selectUser(user));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);
