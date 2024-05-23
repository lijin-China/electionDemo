const { app, BrowserWindow } = require('electron')
const path = require('node:path')
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
const createWindow = () => {
  const newWindow = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  newWindow.loadFile('index.html')
}
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
