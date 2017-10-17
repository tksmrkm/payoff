import React, {Component} from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    IconButton,
    withStyles,
    Drawer,
    List,
    ListItem,
    ListItemText
} from 'material-ui';
import {
    Menu as MenuIcon
} from 'material-ui-icons';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%'
    },
    flex: {
        display: 'flex',
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

class Navbar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        };
    }

    handleRequestClose(e) {
        this.setState({
            open: false
        });
    }

    handleOpenDrawer(e) {
        this.setState({
            open: true
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <AppBar
                position="static"
            >
                <Toolbar>
                    <Typography
                        type="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        Calculator
                    </Typography>
                    <IconButton color="contrast">
                        <MenuIcon
                            onClick={this.handleOpenDrawer.bind(this)}
                        />
                    </IconButton>
                </Toolbar>
                <Drawer
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose.bind(this)}
                >
                    <List>
                        <ListItem component="a" href="https://tksmrkm.github.io/payoff">
                            <ListItemText primary="Home" />
                        </ListItem>
                    </List>
                </Drawer>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Navbar);
