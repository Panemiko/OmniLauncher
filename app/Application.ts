import type { App } from 'electron'
import { app, BrowserWindow, ipcMain } from 'electron'
import isDev from 'electron-is-dev'

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
        await this.loadAppEvents()
        await this.loadIpcEvents()
        await this.createMainWindow()
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
            frame: false,
            fullscreenable: false,
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
    }

    private async loadIpcEvents(): Promise<void> {
        ipcMain.on('window-close', () => {
            BrowserWindow.getFocusedWindow()?.close()
        })
    }

}
