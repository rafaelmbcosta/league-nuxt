import { shallowMount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import index from "../index"

const localVue = createLocalVue()
describe("index", () => {
  test("loads component", () => {
    const vuetify = new Vuetify()
    const wrapper = shallowMount(index, {}, localVue, vuetify)
    expect(wrapper).toMatchSnapshot()
  })
})
