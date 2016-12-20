///////////////////////////////////////////////////////////////////////////
function createWindow () {
var gw = new BrowserWindow({ width: 300, height: 100, x:2800, y:800,movable:true,alwaysOnTop:false, transparent: true,skipTaskbar:true, frame: false });
gw.on('closed', function() {
  gw = null;
});
gw.loadURL('F:/ajr/matrix_start_only/index.html');
gw.show();
gw.setPosition(2800,-200);// Прячем окно за екран
let gj = 1
jetpack.write('F:/ajr/matrix_start_only/app_window.json',gj)



}
////////////////////////////////////////////////////////////////////////////////
function closeWindow() {
  setInterval( function() {
    let yyy = jetpack.read('F:/ajr/matrix_start_only/app_window.json','json')
    if(yyy == 0){
      //alert('gfg')
      if(BrowserWindow.fromId(2)){BrowserWindow.fromId(2).close()}
      if(BrowserWindow.fromId(3)){BrowserWindow.fromId(3).close()}
      if(BrowserWindow.fromId(4)){BrowserWindow.fromId(4).close()}
      //gh.close();
      app.quit();
    }
  } , 1000)
}
/////////////////////////////////////////////////////////////////////////////////
const {app, BrowserWindow} = require('electron');
var jetpack = require('fs-jetpack')
app.on('ready', createWindow)

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
  app.quit()
}
})

closeWindow();
//app.on('activate', () => {
//  if (win === null) {
//    createWindow()
//  }
//})
