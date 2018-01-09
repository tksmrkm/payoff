import React from 'react';
import ListNode from '~/containers/Dealings/ListNode';
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

export default DealList;
