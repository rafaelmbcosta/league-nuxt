/* global jest */

import { shallowMount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import VueApollo from "vue-apollo"
import { createMockClient } from "mock-apollo-client"
import index from "../index"
import CURRENT_RULES_QUERY from "@/graphql/queries/currentRules.gql"

const localVue = createLocalVue()
localVue.use(VueApollo)
const vuetify = new Vuetify()

describe("index", () => {
  let wrapper
  let mockClient
  let apolloProvider
  let requestHandlers

  const createComponent = (handlers) => {
    mockClient = createMockClient()
    apolloProvider = new VueApollo({
      defaultClient: mockClient
    })

    requestHandlers = {
      currentRulesHandler: jest.fn().mockResolvedValue({ data: { currentRules: { text: "<p>123 testing</p>" } } }),
      ...handlers
    }

    mockClient.setRequestHandler(
      CURRENT_RULES_QUERY,
      requestHandlers.currentRulesHandler
    )

    wrapper = shallowMount(index, { apolloProvider, localVue, vuetify })
  }

  afterEach(() => {
    wrapper.destroy()
    mockClient = null
    apolloProvider = null
  })

  test("shows 'no rules yet' when there is no currentRules", async () => {
    createComponent({
      currentRulesHandler: jest.fn().mockResolvedValue({ data: { currentRules: null } })
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain("As regras desta temporada ainda não foram cadastradas")
  })

  test("shows 'loading'", async () => {
    createComponent()

    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain("Carregando...")
  })

  test("shows rules text", async () => {
    createComponent()

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$apollo.queries.currentRules).toBeTruthy()
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element).toMatchSnapshot()
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain("123 testing")
  })
})
