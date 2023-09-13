import { createStore } from "vuex"
import { mount } from "@vue/test-utils"
import ComponentWithButtons from "../../src/components/ComponentWithButtons.vue"

// We create a new store with createStore, passing a Jest mock function (jest.fn()) in place of the testMutation.
const mutations = {
  testMutation: jest.fn()
}
const store = createStore({
  mutations
})

describe('ComponentWithButtons', () => {
  it('commits a mutation when a button is clicked', async () => {
    const wrapper = mount(ComponentWithButtons, {
      global: {
        plugins: [store]
      }
    })

    // setValue and trigger both, internally, return Vue.nextTick(). As of vue-test-utils beta 28, you need to call nextTick to ensure Vue's reactivity system updates the DOM.
    wrapper.find('.commit').trigger('click')
    await wrapper.vm.$nextTick()

    // Vuex mutations are always called with two arguments: the first is the current state, and the second is the payload. Since we didn't declare any state for the store, we expect it to be called with an empty object. The second argument is expected to be { msg: "Test Commit" }, which is hard coded in the component.
    expect(mutations.testMutation).toHaveBeenCalledWith(
      {},
      { msg: 'Test Commit'}
    )
  })

  it('dispatch a namespaced action when button is clicked', async () => {
    const store = createStore()
    store.dispatch = jest.fn()

    const wrapper = mount(ComponentWithButtons, {
      global: {
        plugins: [store]
      }
    })

    wrapper.find('.namespaced-dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    expect(store.dispatch).toHaveBeenCalledWith(
      'namespaced/very/deeply/testAction',
      { msg: 'Test Namespaced Dispatch'}
    )
  })

  it('dispatch a namespaced action when button is clicked', async () => {
    const mockStore = { dispatch: jest.fn() }

    const wrapper = mount(ComponentWithButtons, {
      global: {
        mocks: {
          $store: mockStore
        }
      }
    })

    wrapper.find('.dispatch').trigger('click')
    await wrapper.vm.$nextTick()

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      'testAction',
      { msg: 'Test Dispatch'}
    )
  })
})