import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  // create browser window from window.electron;

  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    },
    width: 800
  });

  // load index.html of the app
  console.log("__dirname", __dirname);
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // open devTools
  mainWindow.webContents.openDevTools();

  //Emited when window is closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

}



app.on("ready", createWindow);

//Quit all windows
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// const template = new Array<any>();
//     // Edit Menu
//     template.push({},{
//       label: "Edit",
//       submenu: [
//         { role: "undo" },
//         { role: "redo" },
//         { type: "separator" },
//         { role: "cut" },
//         { role: "copy" },
//         { role: "paste" },
//         { role: "pasteandmatchstyle" },
//         { role: "delete" },
//         { role: "selectall" }
//       ]
//     });
//     // View Menu
//     template.push({
//       label: "View",
//       submenu: [
//         { role: "reload" },
//         { role: "forcereload" },
//         { role: "toggledevtools" },
//         { type: "separator" },
//         { role: "resetzoom" },
//         { role: "zoomin" },
//         { role: "zoomout" },
//         { type: "separator" },
//         { role: "togglefullscreen" }
//       ]
//     });
//     // Windown menu
//     template.push({
//       role: "window",
//       submenu: [{ role: "minimize" }, { role: "close" }]
//     });
//     // Help menu
//     template.push({
//       role: "help",
//       submenu: [
//         {
//           label: "Learn More",
//           click() {
//             require("electron").shell.openExternal("https://electron.atom.io");
//           }
//         }
//       ]
//     });
  
//     if (process.platform === "darwin") {
//       template.unshift({
//         label: 'Test app',
//         submenu: [
//           { role: "about" },
//           { type: "separator" },
//           { role: "services", submenu: [] },
//           { type: "separator" },
//           { role: "hide" },
//           { role: "hideothers" },
//           { role: "unhide" },
//           { type: "separator" },
//           { role: "quit" }
//         ]
//       });
  
//       // Edit menu
//       template[1].submenu.push(
//         { type: "separator" },
//         {
//           label: "Speech",
//           submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }]
//         }
//       );
  
//       // Window menu
//       template[3].submenu = [
//         { role: "close" },
//         { role: "minimize" },
//         { role: "zoom" },
//         { type: "separator" },
//         { role: "front" }
//       ];
//     }
  
//     const menu = Menu.buildFromTemplate(template);
//     Menu.setApplicationMenu(menu);
