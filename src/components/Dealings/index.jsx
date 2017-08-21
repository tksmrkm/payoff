import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import DealList from './DealList';

const Dealings = () => {
    return (
        <div>
            <AddForm />
            <DealList />
        </div>
    );
};

export default connect()(Dealings);
