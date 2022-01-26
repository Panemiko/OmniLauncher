import type { App } from 'electron'
import { app, BrowserWindow, ipcMain } from 'electron'
import isDev from 'electron-is-dev'
import os from 'os'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

export default class Application {

    /**
     * Electron app
     */
    app: App

    /**
     * Application main window
     */
    win: BrowserWindow

    constructor() {
        this.app = app
    }

    /**
     * Runs the application once it is started
     */
    async run(): Promise<void> {
        await this.app.whenReady()
        await this.createMainWindow()
        await this.loadAppEvents()
        await this.loadIpcEvents()
        await this.loadContent()
    }

    /**
     * Creates the application main window
     */
    private async createMainWindow(): Promise<void> {
        this.win = new BrowserWindow({
            title: 'Omni Launcher',
            width: 1100,
            height: 700,
            backgroundColor: '#1F1A26',
            titleBarStyle: 'hidden',
            fullscreenable: false,
            show: false,
            minWidth: 800,
            minHeight: 400,
            webPreferences: {
                devTools: isDev,
                preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
                contextIsolation: true,
                nodeIntegration: false
            }
        })
    }

    /**
     * Loads the main window content
     */
    private async loadContent(): Promise<void> {
        this.win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
    }

    /**
     * Loads the electron app events
     */
    private async loadAppEvents(): Promise<void> {
        this.app.on('window-all-closed', () => {
            this.app.quit()
        })

        this.app.on('activate', async () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                await this.createMainWindow()
            }
        })

        this.win.once('ready-to-show', () => {
            this.win.show()
        })
    }

    private async loadIpcEvents(): Promise<void> {
        ipcMain.on('window-close', () => {
            BrowserWindow.getFocusedWindow()?.close()
        })

        ipcMain.on('window-maximize', () => {
            BrowserWindow.getFocusedWindow()?.maximize()

        })

        ipcMain.on('window-unmaximize', () => {
            BrowserWindow.getFocusedWindow()?.unmaximize()
        })

        ipcMain.on('window-minimize', () => {
            BrowserWindow.getFocusedWindow()?.minimize()
        })

        this.win.on('maximize', () => {
            this.win.webContents.send('window-on-maximize-update')
        })

        this.win.on('unmaximize', () => {
            this.win.webContents.send('window-on-maximize-update')
        })

        ipcMain.handle('window-is-maximized', () => {
            return BrowserWindow.getFocusedWindow()?.isMaximized()
        })

        ipcMain.handle('os-get-plataform', () => {
            return os.platform()
        })
    }

}
