import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar , Avatar, Drawer, MenuItem }  from 'material-ui';

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
           />
           <MenuItem
             primaryText="HomeScreen"
             containerElement={<Link to="/" />}
             onTouchTap={() => this.props.update("Login")}
           />
             <MenuItem
               primaryText="Login/SignUp"
               containerElement={<Link to="/Login" />}
               onTouchTap={() => this.props.update("Login")}
             />
             <MenuItem
               primaryText="Dreams"
               containerElement={<Link to="/Dreams" />}
               onTouchTap={() => this.props.update("Dreams")}
             />
             <MenuItem
               primaryText="Log"
               containerElement={<Link to="/Log" />}
               onTouchTap={() => this.props.update("Log")}
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
