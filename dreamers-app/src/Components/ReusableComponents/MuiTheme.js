import getMuiTheme from 'material-ui/styles/getMuiTheme';
const myMuiTheme = getMuiTheme ({

  fontFamily: 'Mukta Malar, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: '#1a256b',
    primary2Color: '#1a256b',
    primary3Color: '#757575',
    accent1Color: '#ff4081',
    accent2Color: '#f50057',
    accent3Color: '#ff80ab',


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
  text:'#ffffff',
  },

  raisedButton:{
  color:'#1a256b',
  textColor:'#ffffff',
  },

  textField:{
  textColor: '#ffffff',
  hintColor: '#ffffff',
  floatingLabelColor: '#ffffff',
  disabledTextColor: '#ffffff',
  errorColor: '#ff0000',
  focusColor: '#ffffff',
  borderColor: '#ffffff',
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
  thumbOffColor: '#ffffff',
},
checkbox: {
   boxColor: '#ffffff',
   checkedColor: '#1a256b',
   requiredColor:'#1a256b' ,
   labelColor: '#ffffff',
 },
 datePicker: {
  color: '#ffffff',
  textColor: '#ffffff',
  calendarTextColor: '#000000',
  selectColor: '#1a256b',
  selectTextColor:'#ffffff' ,
  calendarYearBackgroundColor: '#1a256b',
  headerColor: '#1a256b',
  backgroundColor: '#1a256b'
},
paper:{
  zDepth:5,
}


});

export default myMuiTheme;
