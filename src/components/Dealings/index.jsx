import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';

const Dealings = () => {
    return (
        <AddForm />
    );
};

export default connect()(Dealings);
