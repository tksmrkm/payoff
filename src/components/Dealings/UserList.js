import React from 'react';
import { connect } from 'react-redux';
import { row, wrapper } from '../../styles';
import { SelectField, MenuItem } from 'material-ui';

const UserList = ({users}) => {
    const menuItemNodes = users.map(user => {
        return (
            <MenuItem
                key={user.id}
                value={user.id}
                primaryText={user.name}
            />
        );
    });

    let value;

    return (
        <SelectField
            value={value}
            onChange={event => {
                console.log(event);
            }}
        >
            {menuItemNodes}
        </SelectField>
    );
};

const mapStateToProps = ({users, }) => {
    return {
        users
    };
}

export default connect(mapStateToProps)(UserList);
