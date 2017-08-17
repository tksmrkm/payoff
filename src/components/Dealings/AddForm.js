import React from 'react';
import { connect } from 'react-redux';
import { addDealing } from '../../actions';
import { row, wrapper } from '../../styles';
import { TextField, Button, Menu, MenuItem } from 'material-ui';

let open = false;

const MenuState = {
    anchorEl: null,
    onRequestClose: () => {
        open = false;
    },
    selected: 0,
    onClick: (user_id) => {
        MenuState.selected = user_id;
        open = false;
        console.log(MenuState);
    },
    handleOpen: event => {
        console.log(MenuState);
        open = true;
        MenuState.anchorEl = event.target;
    }
};

const AddForm = ({onSubmitAddDealing, users}) => {
    let name, value, ignore_users;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!name.value.trim() || !value.value.trim()) {
                    return;
                }
                onSubmitAddDealing(MenuState.selected, name.value, value.value, []);
                name.value = '';
                value.value = '';
                MenuState.selected = 0;
            }}
            style={wrapper}
        >
            <Button
                aria-owns={open ? 'simple-menu': null}
                aria-haspopup="true"
                onClick={MenuState.handleOpen}
            >Select User</Button>
            <Menu
                anchorEl={MenuState.anchorEl}
                open={open}
                onRequestClose={MenuState.onRequestClose}
            >
                {users.map((user) => 
                    <MenuItem
                        key={user.id}
                        selected={user.id === MenuState.selected}
                        onClick={event => {
                            MenuState.onClick(user.id);
                        }}
                    >
                        {user.name}
                    </MenuItem>
                )}
            </Menu>
            <TextField
                inputRef={node => {
                    name = node;
                }}
                label="Name"
                fullWidth={true}
                required={true}
                style={row}
            />
            <TextField
                inputRef={node => {
                    value = node;
                }}
                label="Value"
                fullWidth={true}
                required={true}
                style={row}
                type="number"
            />
            <Button
                color="accent"
                raised={true}
                style={row}
                type="submit"
            >Add</Button>
        </form>
    );
};

const mapStateToProps = ({users, }) => {
    return {
        users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddDealing: (user_id, name, value, ignore_users) => {
            dispatch(addDealing(user_id, name, value, ignore_users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
