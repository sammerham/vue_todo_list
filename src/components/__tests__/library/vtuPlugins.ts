import { updateAkuComponents } from '@tests/testUtils'
import type AhiButton from '@azaleahealth/azalea-kit-ui/dist/components/button/button'
import type AhiCheckbox from '@azaleahealth/azalea-kit-ui/dist/components/checkbox/checkbox'
import type AhiSelect from '@azaleahealth/azalea-kit-ui/dist/components/select/select'
import type AhiToggle from '@azaleahealth/azalea-kit-ui/dist/components/toggle/toggle'
import type { DOMWrapper } from '@vue/test-utils'

export const AzaleaKitUIPlugin = (
  wrapper: DOMWrapper<AhiSelect | AhiButton | AhiCheckbox | AhiToggle>
) => {
  /** Set the value of an Azalea Kit UI component, update the component, and trigger the ahi-change event */
  async function setAhiValue(value: any) {
    wrapper.element.value = value
    await updateAkuComponents(wrapper)
    return wrapper.trigger('ahi-change')
  }

  /** Clicks an Azalea Kit UI element and updates the component */
  function ahiClick() {
    wrapper.element.click()
    return updateAkuComponents(wrapper)
  }

  /** Clicks an Azalea Kit UI element and updates the component */
  function ahiCheck() {
    wrapper.element.click()
    return updateAkuComponents(wrapper)
  }

  return { setAhiValue, ahiClick, ahiCheck }
}
