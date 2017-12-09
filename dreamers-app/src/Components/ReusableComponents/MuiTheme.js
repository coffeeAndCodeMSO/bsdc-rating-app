import React from 'react';

import {
  cyan700,
  grey600,
  pinkA100, pinkA200, pinkA400,
  fullWhite,transparent,
} from '../../style/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const myMuiTheme = getMuiTheme ({

  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor:'#000000',
    secondaryTextColor: fullWhite,
    alternateTextColor: fullWhite,

  },
  drawer:{
    color:"#555555",
  },
  raisedButton:{
  color:"#555555",
  textColor:fullWhite
  },
  textField:{
  textColor: '#000000',
  hintColor: '#000000',
  floatingLabelColor: '#000000',
  disabledTextColor: '#000000',
  errorColor: '#ff0000',
  focusColor: '#000000',
  backgroundColor: 'transparent',
  borderColor: '#000000',
},
  floatingActionButton:{
  color:"#555555",
  }
});

export default myMuiTheme;
