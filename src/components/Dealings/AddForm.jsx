import React from 'react';
import { connect } from 'react-redux';
import {
    addDealing,
    toggleSelectUserMenu,
    resetDealings,
    bindNameElement,
    bindValueElement
} from '../../actions';
import {
    TextField,
    Button,
    Menu,
    MenuItem,
    Grid
} from 'material-ui';
import SelectUser from '../../containers/SelectUser';

const AddForm = ({onSubmitAddDealing, onToggleSelectUserMenu, onResetDealings, users, menus, add_dealing_form, handleBindNameElement, handleBindValueElement}) => {
    let ignore_users = [], ignored;

    const onChangeIgnored = options => {
        for (let i of options) {
            if (i.selected) {
                ignore_users.push(i.value);
            }
        }
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
                if (!add_dealing_form.name_element.value.trim() || !add_dealing_form.value_element.value.trim() || !add_dealing_form.selected_user) {
                    console.warn('Invalid data', add_dealing_form);
                    return;
                }
                onSubmitAddDealing(add_dealing_form.selected_user, add_dealing_form.name_element.value, add_dealing_form.value_element.value, ignore_users);
                add_dealing_form.name_element.value = '';
                add_dealing_form.value_element.value = '';
                onResetIgnored();
                ignore_users = [];
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <SelectUser />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={node => {
                            handleBindNameElement(node);
                        }}
                        label="Name"
                        fullWidth={true}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={node => {
                            handleBindValueElement(node);
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

const mapStateToProps = ({users, menus, add_dealing_form}) => {
    return {
        users,
        menus,
        add_dealing_form
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
        },
        handleBindNameElement: (element) => {
            dispatch(bindNameElement(element));
        },
        handleBindValueElement: (element) => {
            dispatch(bindValueElement(element));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(AddForm);
