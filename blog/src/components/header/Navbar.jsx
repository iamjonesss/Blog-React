// Importação do React 
import React from 'react';

//Importando os componentes do Material-UI
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        open={open}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sobre" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Portfólio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contato" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

