// Importação do React 
import React from 'react';

//Importando os componentes do Material-UI
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// A função makeStyles é usada para criar uma instância de estilos personalizados
// Classes de estilo como root, menuButton, title e drawer são usadas para estilizar componentes
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

// Criando a função de Navbar
export const Navbar = () => {

  // A função useStyles é usada para obter as classes de estilo anteriores
  const classes = useStyles();

  // Cria um estado open e uma função setOpen para controlar se o drawer está aberto ou fechado
  const [open, setOpen] = React.useState(false);

  // É uma função que alterna o estado do drawner entre aberto e fechado quando o ícone do menu é clicado
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
            Vukyr
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

