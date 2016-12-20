const path = require('path')


quants = [];
funcClass = {};
listOfMatrix = [];

module.exports.save = function (key, val) {
funcClass = {a:'12dd'}
};

////////////////////////////////////////////////////////////////
module.exports.new_bozon = new_bozon
function new_bozon(x, y, data){
quants.push({
  speed:{
    x:1,
    y:0
  },
  x,
  y,
  data
});

}
/*
module.exports.new_bozon_x = new_bozon_x
function new_bozon_x(xf,yf,xg,yg,dat){
  quants.push({
    speed:{
      x:xf,
      y:yf
    },
    x:xg,
    y:yg,
    data:dat
 });
  //console.log(text);
}
*/

 new_bozon_x = function(xf,yf,xg,yg,dat){
  quants.push({
    speed:{
      x:xf,
      y:yf
    },
    x:xg,
    y:yg,
    data:dat
 });
  //console.log(text);
}

new_bozon = function(xg,yg,dat){
 quants.push({
   speed:{
     x:1,
     y:0
   },
   x:xg,
   y:yg,
   data:dat
});
 //console.log(text);
}
////////////////////////////////////////////////////////////////
var streamer = new ya.speechkit.SpeechRecognition();


aska_speech_recording = function(g){
if(g == 'play'){
window.ya.speechkit.settings.apikey = 'ddf051c8-8d90-4912-bccb-9fd85f0e21db';
streamer.start({
  format: ya.speechkit.FORMAT.PCM44,
  initCallback: function () {
    console.log("Началась запись звука.");
  },
  dataCallback: function (text, done, merge, time) {
    if(done == true){
      //if(text != ""){
      text = text.substring(0,text.length-1);

      new_bozon(1, 5, text);
    }
  },
  errorCallback: function (err) {
    new_bozon(1, 5, 'возникла ошибка');
  },
  infoCallback: function (sent_bytes, sent_packages, processed, format) {
  },
  stopCallback: function () {
    console.log("Запись звука прекращена.");
  },
  particialResults: false,
  utteranceSilence: 7
});
}else if(g == 'pause'){
streamer.pause();
}
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////  ВЫБОР УРОВНЯ ОПТИМИЗАЦИИ  /////////////////
///////////////////////////////////////////////////////////////////
//---------------------------------------------------------------//
optimaize_lvl = function(bazon_x,matrix_lvl){

  let sintaxis_optimaize = 'circle_lvl_';
  let code = bazon_x.data.code;
  let lvl_search = code.search(sintaxis_optimaize);
  let circle_lvl = parseFloat(code.substring(lvl_search+sintaxis_optimaize.length,lvl_search+sintaxis_optimaize.length+1));

  if(circle_lvl > matrix_lvl){
    bazon_x.speed.x=1;bazon_x.speed.y=-1;//ВЕРХ-ВПЕРЕД
  }else if(circle_lvl < matrix_lvl){
    bazon_x.speed.x=-1;bazon_x.speed.y=1;//НИЗ-НАЗАД
  }else if(circle_lvl == matrix_lvl){
    bazon_x.speed.x=0;bazon_x.speed.y=1;//НИЗ
  }
  return bazon_x
}

///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////
/*
new_bozon = function(xg,yg,sx,sy,dat){
  speechQuant2 = {
    speed:{
      x:sx,
      y:sy
    },
    x:xg,
    y:yg,
    data:dat
  };
  //console.log(text);
  quants.push(JSON.parse(JSON.stringify(speechQuant2)));
  windowManager.sharedData.set('quants', quants);
}
*/
////////////////////////////////////////////////////////////////
matrix_new_bazon = function(xg,yg){
  quants.push({
    speed:{
      x:0,
      y:1
    },
    x:xg,
    y:yg,
    data:'0'
  });
}
/////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////////////  ЗАПУСК НОВОГО БАЗОНА ЕСЛИ ПАР.= 1  //////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
zapysk_bazona = function(proverka_x){//////////////////////////////
  /////////////////////////////////////////////////////////////////
  if(proverka_x!=undefined && proverka_x!=0){//   <--- IF
    new_bozon_x(1,0,1,5,proverka_x)//                   |
    //aska('появился новый базон')//                      |
  }//                                             <--- { }
}

///////////////////////////////////////////////////////////////////
////////////////  ЗАПУСК НОВОГО БАЗОНА ЕСЛИ ПАР.= 1  //////////////
///////////////////////////////////////////////////////////////////
module.exports.serch_parameters = serch_parameters;
function serch_parameters(cod,par,par_str){//////////////////////
  ///////////////////////////////////////////////////////////////////
  let s_p1 = cod.search(par);
  let code1 = cod.substring(0,s_p1);
  let p1 = parseFloat(cod.substring(s_p1+9,s_p1+10));
  let code2 = cod.substring(s_p1+10,cod.length);
  var parameter_1 = par_str[p1];
  var code = code1+parameter_1+code2;
  return code
}
/*
serch_parameters = function(cod,par,par_str){//////////////////////
  ///////////////////////////////////////////////////////////////////
  let s_p1 = cod.search(par);
  let code1 = cod.substring(0,s_p1);
  let p1 = parseFloat(cod.substring(s_p1+9,s_p1+10));
  let code2 = cod.substring(s_p1+10,cod.length);
  var parameter_1 = par_str[p1];
  var code = code1+parameter_1+code2;
  return code
}
*/
///////////////////////////////////////////////////////////////////
////////////////  ЗАПУСК НОВОГО БАЗОНА ЕСЛИ ПАР.= 1  //////////////
///////////////////////////////////////////////////////////////////
module.exports.serch_coma = serch_coma;
function serch_coma(cod,par){////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  var counts = 0;
  for(i=0;i<10;i++){
    if(cod.search(par) >= 0){
      counts +=1;
      let p = cod.search(par);
      cod = cod.substring(p+1,cod.length);
    }else{
      i = 99;
    }
  }
  return counts
}
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////  ВЫБОР УРОВНЯ ОПТИМИЗАЦИИ  /////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
code_convert_parameters = function(code,arr_parameters){//
  ///////////////////////////////////////////////////////////////////
  var sintaxis_parametrov = 'parameter';
  var code_with_parameters = '';

  if(arr_parameters!=undefined){
    for(i=0;i<arr_parameters.length;i++){
      code = serch_parameters(code,sintaxis_parametrov,arr_parameters);
    }
  }else{
    if(code.search(sintaxis_parametrov)>=0){
      let arr_zero_parameters = [0,0,0,0,0,0,0,0,0,0]
      var counts = serch_coma(code,sintaxis_parametrov);
      for(i=0;i<counts;i++){
        code = serch_parameters(code,sintaxis_parametrov,arr_zero_parameters);
      }
    }
  }
  return code
}
////////////////////////////////////////////////////////////////
if(typeof quants === 'undefined')quants = [];
//quants = [];

testQuant = {
  speed:{
    x:1,
    y:0
  },
  x:1,
  y:5,
  data:'start'
};


////////////////////////////////////////
aska = function(text){
  var audio = document.getElementById('audio');
  var url = 'https://tts.voicetech.yandex.net/generate?'+
      'key=ddf051c8-8d90-4912-bccb-9fd85f0e21db'+
      '&text='+encodeURI(text)+
      '&format=mp3'+
      '&lang=ru-RU'+
      '&topic=queries'+
      'speed=2'+
      '&robot=1'+
      '&emotion=evil';
  audio.src = url;
  audio.load();
  audio.onloadeddata = function () {
    audio.play();
  }
  var new_data = [text,'ASKA:'];

  let arr_statistic = jetpack.read('F:/ajr/chat/chat_log.json', 'json');
  arr_statistic.splice(arr_statistic.length,0,new_data);
  jetpack.write('F:/ajr/chat/chat_log.json', arr_statistic);
}
/////////////////////////////////////////////////////
module.exports.readList = readList;
function readList (){
p = path.resolve('JSON')

listOfMatrix = jetpack.list(p).map(v=>{
  let fn = JSON.parse(jetpack.read(path.resolve(p,v)))
  return {fn, name: p};
})

return listOfMatrix;
}


function create_function(fnsrc){
return new Function('data', fnsrc);
}

module.exports.loadFunc = loadFunc;
function loadFunc (mx){
funcClass = _.mapObject(mx.fn, create_function)

fns = _.functions(funcClass).map(fname=>fname.split('y').reduce((memo, val)=>{
  if(val.charAt(0)=='x'){
    memo.x = 1*val.substr(1);
  }else{
    memo.y = 1*val}
  return memo
},{name:fname, src: String(funcClass[fname])})) //!!!!!!!!
//preout.innerHTML = JSON.stringify(fns, null, 2);
}

module.exports.runFrame = runFrame;
function runFrame (){
    quants.forEach(calculateMove);
    quants.forEach(runCode);

}

module.exports.calculateMove = calculateMove;
function calculateMove (q){
Object.keys(q.speed).forEach(k=>q[k] += q.speed[k])
}

module.exports.runCode = runCode;
function runCode (q){

var fname = `x${q.x}y${q.y}`;

if(funcClass.hasOwnProperty(fname)){
  funcClass[fname].apply(q,[q.data]);
}



}

module.exports._calculate = _calculate;
function _calculate (q){
//console.log(q)
//console.log(" смотри сюда");
var qq = q;
Object.keys(q.speed).forEach(k=>q[k] += q.speed[k])
if(0==(qq.x = q.x%67))qq.y++;
//qq.y = qq.y%42

var fname = `x${q.x}y${q.y}`;

if(funcClass.hasOwnProperty(fname)){
  funcClass[fname].apply(qq,[qq.data]);
}



}


module.exports.reload = reload;
function reload (){
readList();
quants = [];
let bazon_state = jetpack.read('F:/ajr/matrix_start_only/JSON/index.json', 'json');
console.log(bazon_state[0])
let p = path.resolve('JSON')
let name = '14758939'
jetpack.list(p).map((v,index)=>{
  console.log(v)
  v = v.substring(0,v.search('json')-1);
  console.log(v)
  if(v == bazon_state[0]){
    name = index
    console.log(name)
  }
})
//if(bazon_state)
loadFunc(listOfMatrix[name])
}
