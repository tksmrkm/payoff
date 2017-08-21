import React from 'react';
import { connect } from 'react-redux';
import { addDealing, toggleSelectUserMenu, resetDealings } from '../../actions';
import { TextField, Button, Menu, MenuItem, Grid } from 'material-ui';

const AddForm = ({onSubmitAddDealing, onToggleSelectUserMenu, onResetDealings, users, menus}) => {
    let name, value, ignore_users, selected_user, ignored;

    const onChangeIgnored = options => {
        const list = [];
        for (let i of options) {
            if (i.selected) {
                list.push(i.value);
            }
        }
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
                onSubmitAddDealing(selected_user.value, name.value, value.value, ignore_users);
                name.value = '';
                value.value = '';
                onResetIgnored();
                ignore_users = [];
            }}
        >
            <Grid container>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={node => {
                            name = node;
                        }}
                        label="Name"
                        fullWidth={true}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={node => {
                            value = node;
                        }}
                        label="Value"
                        fullWidth={true}
                        required={true}
                        type="number"
                    />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        color="accent"
                        raised={true}
                        type="submit"
                    >Add</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        color="default"
                        onClick={onResetDealings}
                    >Reset</Button>
                </Grid>
            </Grid>
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
        },
        onResetDealings: () => {
            if (confirm('Reset Dealings')) {
                dispatch(resetDealings());
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
