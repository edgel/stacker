
// support ttf,woff,eot,otf,svg,symbol

var Font = require('fonteditor-core').Font;
var fs = require('fs');

var narrow = function(source, target, icons){
  var subset = [];
  for(var icon in icons){
    subset[subset.length] = icons[icon]
  }
  // console.log(source, target, subset);

  // read font file
  var buffer = fs.readFileSync(source.path);
  var data = buffer;
  if(source.type == 'svg'){
    data = String.fromCharCode.apply(null, new Uint8Array(data));
  }

  // read font data
  var font = Font.create(data, {
    type: source.type, 
    subset: subset, 
    hinting: true, 
    compound2simple: true,
    inflate: null,
    combinePath: false,
  });

  // write font file
  for(var i=0; i< targets.length; i++) {
    var target = targets[i];
    var buffer = font.write({
      type: target.type,
      hinting: true,
      compound2simple: true,
      deflate: null,
      combinePath: false,
    });
    fs.writeFileSync(target.path, buffer);
  }

  // show data after done
  var fo = font.get();
  console.log(Object.keys(fo));
}

var charico = require('./charico');
var srcfont = './src/font';
if(true){
  var source = { path: srcfont + '/meta/cs.svg', type:'svg' };
  var targets = [{ 
    path: srcfont + '/out/cs.ttf', type:'ttf' 
  },{
    path: srcfont + '/out/cs.eot', type:'eot' 
  },{
    path: srcfont + '/out/cs.woff', type:'woff' 
  },{
    path: srcfont + '/out/cs.svg', type:'svg' 
  },{
    path: srcfont + '/out/cs.xml', type:'symbol' 
  }];
  var icons = charico.find(/^cs-.*/g);
  narrow(source, targets, icons);
}

if(true){
  var source = { path: srcfont + '/meta/fa.ttf', type:'ttf' };
  var targets = [{ 
    path: srcfont + '/out/fa.ttf', type:'ttf' 
  },{
    path: srcfont + '/out/fa.eot', type:'eot' 
  },{
    path: srcfont + '/out/fa.woff', type:'woff' 
  },{
    path: srcfont + '/out/fa.svg', type:'svg' 
  },{
    path: srcfont + '/out/fa.xml', type:'symbol' 
  }];
  var icons = charico.find(/^fa-.*/g);
  narrow(source, targets, icons);
}

if(true){
  var source = { path: srcfont + '/meta/md.ttf', type:'ttf' };
  var targets = [{ 
    path: srcfont + '/out/md.ttf', type:'ttf' 
  },{
    path: srcfont + '/out/md.eot', type:'eot' 
  },{
    path: srcfont + '/out/md.woff', type:'woff' 
  },{
    path: srcfont + '/out/md.svg', type:'svg' 
  },{
    path: srcfont + '/out/md.xml', type:'symbol' 
  }];
  var icons = charico.find(/^md-.*/g);
  narrow(source, targets, icons);
}