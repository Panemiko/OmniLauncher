import { Api } from '../../app/preload'

export default function useElectron(): Api {
    return window.api
}
