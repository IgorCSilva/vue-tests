import { mount } from "@vue/test-utils"
import App from "../../src/App.vue"
import NestedRoute from "../../src/components/NestedRoute.vue"
import router from "@/router"


// If it's necessary you can use a mock to not render the child component.
// jest.mock('@/components/NestedRoute.vue', () => ({
//   name: 'NestedRoute',
//   template: '<div />'
// }))

describe('App', () => {
  it('renders a child component via routing', async () => {

    router.push('/nested-route')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // console.log(wrapper.html())
    expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)
  })
})

describe('NestedRoute', () => {
  it('renders a username from query string', () => {
    const username = 'alice'
    const wrapper = mount(NestedRoute, {
      global: {
        mocks: {
          $route: {
            params: { username }
          }
        }
      }
    })
    
    expect(wrapper.find('.username').text()).toBe(username)
  })
})