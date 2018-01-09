import React from 'react';
import { connect } from 'react-redux';
import {
    addDealing,
    resetDealings,
    bindNameElement,
    bindValueElement,
    chooseIgnoreUsers
} from '~/actions';
import {
    TextField,
    Button,
    Menu,
    MenuItem,
    Grid
} from 'material-ui';
import SelectUser from '~/containers/SelectUser';
import MultipleSelector from '~/containers/MultipleSelector';

const AddForm = ({onSubmitAddDealing, onResetDealings, users, menus, add_dealing_form, handleBindNameElement, handleBindValueElement, handleResetIgnoreUsers}) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!add_dealing_form.name_element.value.trim() || !add_dealing_form.value_element.value.trim() || !add_dealing_form.selected_user) {
                    console.warn('Invalid data', add_dealing_form);
                    return;
                }
                onSubmitAddDealing(add_dealing_form.selected_user, add_dealing_form.name_element.value, add_dealing_form.value_element.value, add_dealing_form.ignore_users);
                add_dealing_form.name_element.value = '';
                add_dealing_form.value_element.value = '';
                handleResetIgnoreUsers();
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
                        label="Title"
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
                    <MultipleSelector />
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
        },
        handleResetIgnoreUsers: () => {
            dispatch(chooseIgnoreUsers([]));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(AddForm);
