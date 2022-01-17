import { contextBridge, ipcRenderer } from 'electron'

const api = {
    window: {
        async close() { ipcRenderer.send('window-close') },
        async maximize() { ipcRenderer.send('window-maximize') },
        async minimize() { ipcRenderer.send('window-minimize') }
    },
    os: {
        async getPlataform() { return await ipcRenderer.invoke('os-plataform') }
    }
}

export default api

contextBridge.exposeInMainWorld('api', api)
