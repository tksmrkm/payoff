import React, { Component } from 'react';
import {
    AppBar,
    Tab,
    Tabs
} from 'material-ui';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    };

    handler(event, value) {
        this.setState({value})
    };

    render() {
        const { value } = this.state;
 
        return (
            <AppBar
                position="static"
            >
                <Tabs
                    centered={true}
                    fullWidth={true}
                    value={value}
                    onChange={this.handler.bind(this)}
                >
                    <Tab
                        label="hoge"
                    >hoge hoge</Tab>
                    <Tab
                        label="fuga"
                    >fuga fuga</Tab>
                </Tabs>
            </AppBar>
        );
    };
}