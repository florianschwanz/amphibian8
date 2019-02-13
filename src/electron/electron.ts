/** Electron objects */
const {app, BrowserWindow} = require('electron');
/** Path object */
const path = require('path');
/** URL object */
const url = require('url');

/**
 * Keeps a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 */
let win;

/**
 * Creates window
 */
function createWindow() {
  /**
   * Browser window
   */
  win = new BrowserWindow({width: 1080, height: 800, icon: __dirname + '/favicon.ico'});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
