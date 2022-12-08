import { useState } from 'react'
import {
  Assignment, Biotech, Healing, Home, Menu
} from '@mui/icons-material'

import {
  Drawer, ListItem, ListItemIcon, ListItemText, List,
  ListItemButton, Toolbar, AppBar, CssBaseline, IconButton
} from '@mui/material';

import { withRouter } from "react-router-dom";

const baseURL = "/appointment-app/"



function Navigation(props) {
  const { history } = props
  const [open, setOpen] = useState(false)

  function handleMenuItemClick(link) {
    history.push(link)
    setOpen(false)
    console.log(link)
  }

  const menuListData = [
    {
      name: 'Homepage',
      icon: <Home/>,
      link: '/',
      onClick: () => window.location.href='/'
    },
    {
      name: 'Appointment',
      icon: <Assignment/>,
      link: baseURL+ props.id + '/',
      onClick: () => handleMenuItemClick(baseURL+ props.id + '/')
    },
    {
      name: 'Test list',
      icon: <Biotech/>,
      link: baseURL+ props.id +'/tests',
      onClick: () => handleMenuItemClick(baseURL+ props.id +'/tests')
    },
    {
      name: 'Treatment',
      icon: <Healing/>,
      link: baseURL+ props.id +'/treatment',
      onClick: () => handleMenuItemClick(baseURL+ props.id +'/treatment')
    },

  ]

  function toggleSidebar() {

    const isOpen = open;
    setOpen(!isOpen)


  }

  console.log('open now is ', open)



  return (
    <div>
      <CssBaseline/>
      <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleSidebar}
          >
          <Menu />
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, position: "fixed", top: 0, right: 0 }}
          onClick={menuListData[0].onClick}
          >
          <Home />
        </IconButton>
      </Toolbar>
      </AppBar>

      <div>
      <Drawer
          open={open} variant='temporary'
          onClose={toggleSidebar}
      >
        <Toolbar/>
        <List>
          {console.log('listing')}
          {
            menuListData.map((item, index) =>
            (<ListItem key={index}>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
              </ListItem>)
            )
          }
        </List>
      </Drawer>
      </div>

    </div>
  )
}


export default withRouter(Navigation)
// export default SideBar
