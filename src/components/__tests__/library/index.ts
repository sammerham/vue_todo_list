import { stripHTML } from '@/utils/html'
import DialogOverlayStub from '@tests/testUtils/DialogOverlayStub.vue'
import DialogStub from '@tests/testUtils/DialogStub.vue'
import DialogTitleStub from '@tests/testUtils/DialogTitleStub.vue'
import type AzaleaKitUIElement from '@azaleahealth/azalea-kit-ui/dist/internal/azalea-kit-ui-element'
import type BaseWrapper from '@vue/test-utils/dist/baseWrapper'

/**
 * Removes HTML from a string and replaces any `<br>` tags with newlines
 */
export function htmlToTextWithNewlines(str: string): string {
  return stripHTML(str.replaceAll(/< *(b|B)(r|R)( +(.*=".*"))* *\/?>/g, '\n')).trim()
}

/**
 * Returns the first item where `item.text()` equals the given string
 */
export function findFirstWithText<T extends BaseWrapper<E>, E extends Element>(
  list: T[],
  txt: string
) {
  return list.filter((item) => item.text() === txt)[0]
}

/**
 * @param time The amount of time for the promise to delay
 * @param successful `true` for the promise to resolve, `false` to reject. Defaults to `true`
 * @param returns The return value for the promise
 */
export function timedPromise<T>(time: number, returns: T, successful = true): Promise<T> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (successful) {
        resolve(returns)
      } else {
        reject(returns)
      }
    }, time)
  )
}

export function createBundle<ResourceType extends fhir.ResourceBase>(
  resources: ResourceType[],
  overrideTotal?: number
): fhir.Bundle<ResourceType> {
  return {
    resourceType: 'Bundle',
    entry: resources.map((item) => ({ resource: item })),
    total: overrideTotal ?? resources.length,
  }
}

/** All stubs needed for stubbing the headlessUI Dialog component */
export const DIALOG_STUBS = {
  Dialog: DialogStub,
  DialogOverlay: DialogOverlayStub,
  DialogTitle: DialogTitleStub,
} as const

export const VIEWPORTS = {
  mobile: { height: 568, width: 320 },
  desktop: { height: 800, width: 1280 },
} as const

export async function updateAkuComponents<T extends Node>(wrapper: BaseWrapper<T>) {
  const akuElements = [
    'ahi-avatar',
    'ahi-badge',
    'ahi-banner',
    'ahi-button',
    'ahi-button',
    'ahi-card',
    'ahi-card',
    'ahi-checkbox',
    'ahi-collapsible',
    'ahi-dropdown',
    'ahi-divider',
    'ahi-icon',
    'ahi-icon',
    'ahi-input',
    'ahi-menu',
    'ahi-menu',
    'ahi-option',
    'ahi-progress',
    'ahi-select',
    'ahi-skeleton',
    'ahi-spinner',
    'ahi-tab',
    'ahi-tab',
    'ahi-tab',
    'ahi-text',
    'ahi-toggle',
    'ahi-tooltip',
  ]
  const allAhiElement = wrapper.findAll<AzaleaKitUIElement>(akuElements.join(', '))
  return await Promise.allSettled(allAhiElement.map((el) => el.element.updateComplete))
}
