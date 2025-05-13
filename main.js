const { app, BrowserWindow } = require('electron')

function creatwindow () {

    const window = new BrowserWindow({
        width: 800,
        height: 600,
     })

     window.loadFile('index.html');
}

app.whenReady().then( () => {
    creatwindow();
})