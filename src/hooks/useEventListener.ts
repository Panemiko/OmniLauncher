
export default function useEventListener(event: string, callback: EventListenerOrEventListenerObject, elementId?: string) {
    const element = (elementId)
        ? document.getElementById(elementId)
        : document

    return element?.addEventListener(event, callback)
}
