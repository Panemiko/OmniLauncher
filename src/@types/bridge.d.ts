import Api from '../Api'

declare global {
    interface Window {
        main: typeof api
    }
}
