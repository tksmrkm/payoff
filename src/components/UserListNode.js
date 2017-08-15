import React from 'react';
import { connect } from 'react-redux';

const UserListNode = ({user}) => {
    console.log(user);
    return (
        <li>
            <dl>
                <dt>Name</dt>
                <dd>{user.name}</dd>
                <dt>支出</dt>
                <dd>{user.expense}</dd>
                <dt>請求</dt>
                <dd>{user.gain}</dd>
            </dl>
        </li>
    );
};

export default connect()(UserListNode);
