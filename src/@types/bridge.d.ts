import api from '../../app/preload'

declare global {
    interface Window {
        main: typeof api
    }
}
