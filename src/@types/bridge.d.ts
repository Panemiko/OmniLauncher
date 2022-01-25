import { Api } from '../../app/preload'

declare global {
    interface Window {
        api: Api
    }
}
