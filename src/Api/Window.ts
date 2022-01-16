import { ipcRenderer } from 'electron'

export default class Window {
    async close() {
        ipcRenderer.send('window-close')
    }
}
