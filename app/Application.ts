import type { App } from 'electron'
import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string

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
    }

    /**
     * Creates the application main window
     */
    private async createMainWindow(): Promise<void> {
        this.win = new BrowserWindow({
            title: 'Omni Launcher',
            width: 1100,
            height: 700,
            fullscreenable: false,
            webPreferences: {
                devTools: isDev
            }
        })
    }

}
