import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import DealList from './DealList';

const Dealings = () => {
    return (
        <div>
            <DealList />
            <AddForm />
        </div>
    );
};

export default connect()(Dealings);
