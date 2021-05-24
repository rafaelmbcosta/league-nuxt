import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import edit from '../edit'

const localVue = createLocalVue()

describe('edit', () => {
  test('loads component', () => {
    const vuetify = new Vuetify()

    const wrapper = shallowMount(edit, {
      mocks: {
        $apollo: {
          loading: false
        }
      }
    }, localVue, vuetify)
    expect(wrapper.vm).toBeTruthy()
  })
})
