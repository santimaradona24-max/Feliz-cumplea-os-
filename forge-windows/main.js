'use strict';
const { app, BrowserWindow, dialog } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const http = require('http');

const PORT = 8787;
let engine = null;
let mainWindow = null;

function waitForEngine(timeoutMs = 15000) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const retry = () => {
      if (Date.now() - started > timeoutMs) return reject(new Error('Forge Engine no pudo iniciar en el puerto ' + PORT + '.'));
      setTimeout(check, 150);
    };
    const check = () => {
      const req = http.get('http://127.0.0.1:' + PORT + '/api/health', res => {
        res.resume();
        if (res.statusCode === 200) return resolve();
        retry();
      });
      req.on('error', retry);
      req.setTimeout(1000, () => { req.destroy(); retry(); });
    };
    check();
  });
}

function startEngine() {
  const server = path.join(__dirname, 'forge-server.js');
  const home = path.join(app.getPath('userData'), 'forge-data');
  engine = spawn(process.execPath, [server], {
    cwd: __dirname,
    windowsHide: true,
    env: {
      ...process.env,
      ELECTRON_RUN_AS_NODE: '1',
      FORGE_PORT: String(PORT),
      FORGE_HOME: home,
      FORGE_NO_OPEN: '1'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  engine.stdout.on('data', b => console.log('[Forge Engine]', String(b).trim()));
  engine.stderr.on('data', b => console.error('[Forge Engine]', String(b).trim()));
  engine.on('exit', (code, signal) => {
    engine = null;
    if (!app.isQuitting) console.error('Forge Engine terminó', code, signal);
  });
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 980,
    minHeight: 640,
    backgroundColor: '#f6f7f9',
    title: 'Forge — estudio de IA',
    icon: path.join(__dirname, 'forge-icon.ico'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  await waitForEngine();
  await mainWindow.loadURL('http://127.0.0.1:' + PORT);
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.whenReady().then(async () => {
  try {
    startEngine();
    await createWindow();
  } catch (err) {
    dialog.showErrorBox('Forge no pudo iniciar', String(err.message || err));
    app.quit();
  }
});

app.on('before-quit', () => {
  app.isQuitting = true;
  if (engine && !engine.killed) engine.kill();
});
app.on('window-all-closed', () => app.quit());
