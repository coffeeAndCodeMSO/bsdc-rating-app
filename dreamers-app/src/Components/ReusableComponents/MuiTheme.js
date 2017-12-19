import getMuiTheme from 'material-ui/styles/getMuiTheme';
const myMuiTheme = getMuiTheme ({

  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: '#00b8d4',
    primary2Color: '#00b8d4',
    primary3Color: '#757575',
    accent1Color: '#ff4081',
    accent2Color: '#f50057',
    accent3Color: '#ff80ab',
    textColor: '#005eff',
    secondaryTextColor: '#ffffff',
    alternateTextColor: '#ffffff',

  },
  appBar: {
  color: '#1a256b',
  textColor: '#ffffff',
  },
  avatar: {
  color: '#e7831b',
  backgroundColor: '#5b12f5',
},
  drawer:{
  color:'#1a256b',
  },

  raisedButton:{
  color:'#1a256b',
  textColor:'#ffffff',
  },

  textField:{
  textColor: '#000000',
  hintColor: '#000000',
  floatingLabelColor: '#000000',
  disabledTextColor: '#000000',
  errorColor: '#ff0000',
  focusColor: '#000000',
  borderColor: '#000000',
},

  floatingActionButton:{
  color:'#1a256b',
},

  menuItem: {
  textColor:'#ffffff',
  dataHeight: 32,
  height: 48,
  hoverColor:'#263283',
  selectedTextColor: '#ffffff',
  rightIconDesktopFill: '#757575',
},
toggle: {
  thumbOnColor: '#ffffff',
  thumbOffColor: '#000000',
},

});

export default myMuiTheme;
