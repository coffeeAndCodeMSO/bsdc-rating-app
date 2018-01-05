import React from 'react';
import {List, ListItem, Toggle, Checkbox, Divider, Subheader} from 'material-ui';

const styles = {
  root: {
  display: 'flex',
  flexWrap: 'wrap'
  }
};

const Settings = () => (
  <div style={styles.root}>
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
