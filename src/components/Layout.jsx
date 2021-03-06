import { makeStyles, Drawer, Typography,List,ListItem, ListItemIcon, ListItemText , AppBar, Toolbar,Avatar} from '@material-ui/core'
import { SubjectOutlined , AddCircleOutline} from '@material-ui/icons'
import React from 'react'
import { useHistory , useLocation} from 'react-router-dom'
import {format} from 'date-fns'


const drawerWidth = 240

const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlined color='secondary' />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutline color='secondary' />,
        path: '/create'
    },
]

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
  return (
      <div className={classes.root}>
          <AppBar
              elevation={1}
          className={classes.appBar}
          >
              <Toolbar>
                  <Typography className={classes.date}>
                      Today is the {format(new Date(), 'do MMMM Y')}
                  </Typography>
                  <Typography>
                      Lucas
                  </Typography>
                  <Avatar src='' className={classes.avatar} />
              </Toolbar>
          </AppBar>




          <Drawer
              className={classes.drawer}
              variant="permanent"
              anchor='left'
              classes={{paper: classes.drawerPaper}}
          >
              <div>
                  <Typography
                      className={classes.title}
                      variant='h5'>
                      Lucas' Notes
              </Typography>
              </div>    

            <List>
                  {menuItems.map((item) => (
                      <ListItem
                          key={item.text}
                          button
                          onClick={() => history.push(item.path)}
                          className={location.pathname === item.path ? classes.active : null}
                      >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>


        </Drawer>
        

          <div
          className={classes.page}
          >
              <div className={classes.toolbar}></div>
              {children}</div>
      </div>
  )
}

export default Layout