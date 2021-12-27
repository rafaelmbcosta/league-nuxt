import { shallowMount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import login from "../login"

const localVue = createLocalVue()
const vuetify = new Vuetify()

describe("login", () => {
  let store

  const factory = () => shallowMount(login, {
    computed: {
      loading: false
    }
  }, localVue, vuetify, store)

  test("loads component", () => {
    const wrapper = factory()
    expect(wrapper).toMatchSnapshot()
  })

  test("calling login actions", () => {
    const wrapper = factory()
    const email = wrapper.find(".v-text-field")
    console.log(wrapper, "wrapper")
    console.log(email, "email")
    it.todo("fill in fields")
    it.todo("click the buttton")
    it.todo("expect action to be called")
  })
})
