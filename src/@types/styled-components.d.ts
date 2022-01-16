import type { ThemeProperties } from '../style/Theme'

declare module 'styled-components' {
    interface DefaultTheme extends ThemeProperties { }
}
