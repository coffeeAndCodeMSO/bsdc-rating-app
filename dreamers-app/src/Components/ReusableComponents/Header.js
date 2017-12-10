import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar , Avatar, Drawer, MenuItem }  from 'material-ui';
import Divider from 'material-ui/Divider';

 export default class Header extends React.Component {
   render(){
     return(
       <div>
           <AppBar
             title={this.props.title}
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={() => this.props.setValue()}
           />
           <Drawer
             docked={false}
             width={300}
             onRequestChange={() => this.props.setValue()}
             open={this.props.open}
           >
           <Avatar
             size={100}
             style={{margin:5}}
           />
         <Divider/>
             <MenuItem
               primaryText="Login/SignUp"
               containerElement={<Link to="/Login" />}
               onTouchTap={() => this.props.update("Login")}
             />
             <MenuItem
               primaryText="My Dreams"
               containerElement={<Link to="/Dreams" />}
               onTouchTap={() => this.props.update("Dreams")}
             />
             <MenuItem
               primaryText="New Dream"
               containerElement={<Link to="/NewDream" />}
               onTouchTap={() => this.props.update("New Dream")}
             />
             <MenuItem
               primaryText="Settings"
               containerElement={<Link to="/Settings" />}
               onTouchTap={() => this.props.update("Settings")}
             />
           </Drawer>

           <div style={{ textAlign: 'center' }}>
             {this.props.children}
           </div>
         </div>
    );
  }
}
