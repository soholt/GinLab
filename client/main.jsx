import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import Lab from '/imports/ui/Lab'

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css.map';

import 'bootstrap/dist/css/bootstrap.css';
//import '/public/darkly/bootstrap.min.css';

//import 'bootstrap/dist/css/bootstrap.css.map';
//import 'bootstrap/dist/css/bootstrap.grid.css';
//import 'bootstrap/dist/css/bootstrap.reboot.css';

//import 'bootstrap/dist/js/bootstrap.js';

Meteor.startup(() => {
  render(<Lab />, document.getElementById('Gin'));
});
