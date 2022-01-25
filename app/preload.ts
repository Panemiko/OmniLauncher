import type { IpcRendererEvent } from 'electron'
import { contextBridge, ipcRenderer } from 'electron'

const api = {
    window: {
        async close() { ipcRenderer.send('window-close') },

        async maximize() { ipcRenderer.send('window-maximize') },

        async unmaximize() { ipcRenderer.send('window-unmaximize') },

        async minimize() { ipcRenderer.send('window-minimize') },

        async isMaximized() { return await ipcRenderer.invoke('window-is-maximized') }
    },
    os: {
        async getPlataform() { return await ipcRenderer.invoke('os-get-plataform') }
    }
}

export default api
export type Api = typeof api
export type IpcRendererEventCallback = (event: IpcRendererEvent, ...args: any[]) => void

contextBridge.exposeInMainWorld('api', api)
