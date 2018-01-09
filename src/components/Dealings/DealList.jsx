import React from 'react';
import ListNode from './ListNode';
import { connect } from 'react-redux';
import List from 'material-ui/List';
import { wrapper } from '~/styles';

const DealList = ({dealings}) => {
    const nodes = dealings.map(dealing => {
        return (
            <ListNode
                dealing={dealing}
                key={dealing.id}
            />
        );
    });

    return (
        <List style={wrapper}>
            {nodes}
        </List>
    )
};

const mapStateToProps = ({dealings}) => {
    return {
        dealings
    };
};

export default connect(mapStateToProps)(DealList);
