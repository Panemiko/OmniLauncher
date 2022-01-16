import { contextBridge } from 'electron'
import Api from './Api'

contextBridge.exposeInMainWorld('main', new Api())
