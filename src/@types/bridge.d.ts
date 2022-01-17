import api from '../../app/preload'

declare global {
    interface Window {
        api: typeof api
    }
}
