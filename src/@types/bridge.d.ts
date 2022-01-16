import Api from '../../app/Api'

declare global {
    interface Window {
        main: typeof api
    }
}
