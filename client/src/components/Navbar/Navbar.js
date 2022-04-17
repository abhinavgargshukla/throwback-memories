import React from 'react';
import { AppBar,Avatar,Button,Toolbar,Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import useStyles from './styles';
const Navbar=()=>{
    const classes=useStyles();
    const user=null;
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
              <Typography component={Link} to="/" className={classes.heading}  variant="h2" align="center">
                  Memories
               </Typography>
               <img className={classes.image} src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9n4iuf7Imt8sIkVO5WMl7NhHiKLJ1us8e2Q&usqp=CAU" alt="memories" height="60"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?(
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} varient="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                ):(
                       <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        
         
      </AppBar>
      
    )
}
export default Navbar;