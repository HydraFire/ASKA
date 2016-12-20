const jade = require('jade')
const _ = require('underscore')
const jetpack = require('fs-jetpack')
const { readList, runFrame, new_bozon, reload, save, calculate } = require('./matrix')

van_dump = (d)=>JSON.stringify(d, null, 2);

tpl = jade.compileFile('./matrix/tpl.jade');
txt = tpl({name:'ASKA'})

document.getElementById('content').innerHTML = txt;

let preout = document.getElementById('preout');
prelog = function(html){
  preout.innerHTML = _.escape(html);
}
startrun = function(){
  //funcClass = _.clone(windowManager.sharedData.fetch('funcClass'));
  runFrame()

  preout.innerHTML = van_dump(quants);
  qcount.innerHTML = quants.length;
}

if(typeof onlyOneLoop === 'undefined')onlyOneLoop = false;

clrint = function(){
  clearInterval(onlyOneLoop);
}
clrint();

settmr = function(){
  //aska_speech_recording('play');
  tme = document.getElementById('mtimeout').selectedOptions[0].value;
  clearInterval(onlyOneLoop);
  onlyOneLoop = setInterval(startrun,tme);
}


document.getElementById('mquantadd').onclick = ()=>new_bozon(1,5,'start');
document.getElementById('mreload').onclick = ()=>prelog(reload());
document.getElementById('mrun').onclick = settmr;
//document.getElementById('mstep').onclick = ()=>{clrint();startrun();};
//document.getElementById('aska').onclick = aska_yandex_zapros("проверка, всё работает правильно");
//document.getElementById('mpause').onclick = clrint;
mwname = 'matrix1_view';
//document.getElementById('mview').onclick = ()=>giveWin(mwname).execute(`Knows.run('${mwname}')`);
//reload()
prelog(reload());
settmr();
new_bozon(1,5,'start');
