import TextInput from './app-input/TextInput'
import AppTextarea from './app-input/Textarea'
import PasswordInput from './app-input/PasswordInput'
import AppSelect from 'vue-multiselect'
import AppButton from './AppButton'
import AppCheckbox from './AppCheckbox'
import AppIcon from './AppIcon'
import AppEditButton from './AppEditButton'
import AppInfoField from './AppInfoField'
import AccordionList from './AccordionList'
import Accordion from './Accordion'
import AppRadio from './AppRadio'
import AppSpinner from './AppSpinner'
import AppLoading from './AppLoading'
import AppDatePicker from './AppDatePicker'

export default function (Vue) {
  Vue.component('app-text-input', TextInput)
  Vue.component('app-password-input', PasswordInput)
  Vue.component('app-select', AppSelect)
  Vue.component('app-button', AppButton)
  Vue.component('app-checkbox', AppCheckbox)
  Vue.component('app-textarea', AppTextarea)
  Vue.component('app-icon', AppIcon)
  Vue.component('app-edit-button', AppEditButton)
  Vue.component('app-info-field', AppInfoField)
  Vue.component('app-accordion', Accordion)
  Vue.component('app-accordion-list', AccordionList)
  Vue.component('app-radio', AppRadio)
  Vue.component('AppSpinner', AppSpinner)
  Vue.component('AppLoading', AppLoading)
  Vue.component('AppDatePicker', AppDatePicker)
}
