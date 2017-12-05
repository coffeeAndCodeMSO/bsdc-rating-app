import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
};

const Settings = () => (
  <div style={styles.root}>
      <List>
        <Subheader>General</Subheader>
        <ListItem
          primaryText="Profile photo"
          secondaryText="Change your profile photo"
        />
      </List>
      <Divider />
      <List>
        <ListItem
          leftCheckbox={<Checkbox />}
          primaryText="Notifications"
          secondaryText="Allow notifications"
        />
      </List>
      <Divider />
      <List>
        <Subheader>Settings</Subheader>
        <ListItem primaryText="Entry Reminder?" rightToggle={<Toggle />} />
        <ListItem primaryText="Public/Private" rightToggle={<Toggle />} />
      </List>
      <Divider />
  </div>
);

export default Settings;
