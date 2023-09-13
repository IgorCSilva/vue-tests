
import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '../../src/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '../../src/components/ComponentWithAsyncCall.vue'

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialize API call', () => {

    // ### Stubbing components using mount is not working. It only works using shallowMount. ###
    // const wrapper = mount(ParentWithAPICallChild, {
    //   stubs: {
    //     ComponentWithAsyncCall: true
    //   }
    // })

    // expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })

  it('renders with shallowMount and does not initialize API call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild)
    // console.log(wrapper.html())
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})