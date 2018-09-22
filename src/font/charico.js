/*!
 * Copyright (C) 2018, Yeahzhu Tech Club - https://yeahzhu.com
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var charico = {

  icons: { 
    'cs-yeah': 0xe001,
    'cs-user': 0xe002,
    'cs-hand': 0xe003,

    'fa-sort': 0xf0dc,

    'md-supervisor_account': 0xe8d3,
  },

  find: function(regex){
    var icons = {};
    for(var icon in this.icons){
      if(icon.match(regex)){
        icons[icon] = this.icons[icon]
      }
    }
    return icons;
  },

  hex: function(str){
    var val=""; for(var i = 0; i < str.length; i++){
      if(val == "") {
        val = str.charCodeAt(i).toString(16);
      } else {
        val += "," + str.charCodeAt(i).toString(16);
      }
    } return val;
  },

  text: function(icos){
    var text = ''; for(var key in icos) {
      text = icos[key] + ' ' + text; 
    } return text;
  },

  html: function(value){
    return "&#x" + charico.hex(value) + ";";
  }

}

module.exports = charico;
