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
    color: '#282828',
    textColor: '#ffffff',
  },
  avatar: {
    color: '#e7831b',
    backgroundColor: '#5b12f5',
  },
  drawer: {
    color:'#282828',
    text:'#ffffff',
  },
  raisedButton: {
    color:'#282828',
    textColor:'#ffffff',
  },
  textField: {
    textColor: '#ffffff',
    hintColor: '#ffffff',
    floatingLabelColor: '#ffffff',
    disabledTextColor: '#ffffff',
    errorColor: '#ff0000',
    focusColor: '#ffffff',
    borderColor: '#ffffff',
  },
  floatingActionButton: {
    color:'#282828',
  },
  menuItem: {
    textColor:'#ffffff',
    dataHeight: 32,
    height: 48,
    hoverColor:'#263283',
    selectedTextColor: '#ffffff',
    rightIconDesktopFill: '#282828',
  },
  toggle: {
    thumbOnColor: '#ffffff',
    thumbOffColor: '#000000',
  },
  checkbox: {
    boxColor: '#ffffff',
    checkedColor: '#ffffff',
    requiredColor:'#282828' ,
    labelColor: '#ffffff',
  },
  datePicker: {
    color: '#ffffff',
    textColor: '#ffffff',
    calendarTextColor: '#000000',
    selectColor: '#282828',
    selectTextColor:'#ffffff' ,
    calendarYearBackgroundColor: '#282828',
    headerColor: '#282828',
    backgroundColor: '#282828'
  },
  paper: {
    zDepth:5,
  }
});

export default myMuiTheme;
