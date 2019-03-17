import React, {Component} from 'react';
import {Drawer} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {ListItemIcon, ListItemText, MenuList, MenuItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './App.css'
import routes from "./routes/routes";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#666666',
        },
    },
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            draweropened: false
        };
    }

    toggleDrawer(open) {
        this.setState({
            draweropened: open
        });
    }

    render() {
        return (
            <div>
                <div>
                    <MuiThemeProvider theme={theme}>
                        <AppBar position="static" color="primary">
                            <Toolbar>
                                <IconButton color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
                                    <MenuIcon/>
                                </IconButton>
                                <div className="toolbar">
                                    <Typography variant="h4" color="inherit">
                                        Game-Shop
                                    </Typography>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </MuiThemeProvider>
                </div>
                <Drawer open={this.state.draweropened} onClose={() => this.toggleDrawer(false)}>
                    <MenuList>
                        {routes.map((prop, key) => {
                            return (
                                <Link to={prop.path} style={{textDecoration: 'none'}} key={key}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <prop.icon/>
                                        </ListItemIcon>
                                        <ListItemText primary={prop.sidebarName}/>
                                    </MenuItem>
                                </Link>
                            );
                        })}
                    </MenuList>
                </Drawer>
            </div>
        );
    }
}

export default App;