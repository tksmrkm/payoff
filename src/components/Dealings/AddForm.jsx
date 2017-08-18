import React from 'react';
import { connect } from 'react-redux';
import { addDealing, toggleSelectUserMenu } from '../../actions';
import { row, wrapper } from '../../styles';
import { TextField, Button, Menu, MenuItem } from 'material-ui';

const AddForm = ({onSubmitAddDealing, onToggleSelectUserMenu, users, menus}) => {
    let name, value, ignore_users, selected_user_node, selected_user, ignored, ignored_node;

    const onChangeIgnored = options => {
        const list = [];
        for (let i of options) {
            if (options.selected) {
                list.push(i.value);
            }
        }
        console.log(list);
        ignore_users = list;
    };
    const onResetIgnored = () => {
        for (let i of ignored.options) {
            i.selected = false;
        }
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!name.value.trim() || !value.value.trim()) {
                    return;
                }
                onSubmitAddDealing(selected_user.value, name.value, value.value, ignored);
                selected_user.value = '';
                name.value = '';
                value.value = '';
                onResetIgnored();
            }}
            style={wrapper}
        >
            <select
                ref={node => {
                    selected_user = node;
                }}
            >
                <option value="0">▼ 選択 ▼</option>
                {users.map((user) => 
                    <option key={user.id} value={user.id}>{user.name}</option>
                )}
            </select>
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
            <div style={row}>
                <select
                    ref={node => {
                        ignored = node;
                    }}
                    onChange={event => {
                        onChangeIgnored(ignored.options);
                    }}
                    multiple
                >
                    {users.map((user) => 
                        <option key={user.id} value={user.id}>{user.name}</option>
                    )}
                </select>
            </div>
            <Button
                color="accent"
                raised={true}
                style={row}
                type="submit"
            >Add</Button>
        </form>
    );
};

const mapStateToProps = ({users, menus}) => {
    return {
        users,
        menus
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAddDealing: (user_id, name, value, ignore_users) => {
            dispatch(addDealing(user_id, name, value, ignore_users));
        },
        onToggleSelectUserMenu: (state) => {
            dispatch(toggleSelectUserMenu(state));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
