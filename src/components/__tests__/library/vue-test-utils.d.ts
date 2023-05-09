//don't remove this import, for some reason TS needs it to properly type the DOMWrapper class
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { DOMWrapper } from '@vue/test-utils'

declare module '@vue/test-utils' {
  export class DOMWrapper {
    /** Set the value of an Azalea Kit UI component and trigger ahi-change */
    setAhiValue(value: any): Promise<void>
    /** Triggers the click event on an Azalea Kit UI button and awaits the next tick */
    ahiClick(): Promise<void>
    /** Clicks an Azalea Kit UI element and awaits the next tick, then triggers the ahi-change event */
    ahiCheck(): Promise<void>
  }
}