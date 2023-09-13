import { mount } from "@vue/test-utils"

// Since v-show="showSpan" defaults to false, we expect the found <span> element's not to be visible. We are using the awesome @testing-library/jest-dom matchers to validate this - determining visibility is tricky business, so Vue Test Utils leaves it up to another battle tested library.
// It was nedded install `npm install --save-dev @testing-library/jest-dom`
import '@testing-library/jest-dom'

import Parent from "@/components/Parent.vue"
import Child from "@/components/Child.vue"
import ParentWithManyChildren from '@/components/ParentWithManyChildren.vue'

describe('Parent', () => {
  it('does not render a span', () => {
    const wrapper = mount(Parent)

    expect(wrapper.find("span").isVisible()).toBe(false)
  })

  it('does render a span', () => {
    const wrapper = mount(Parent, {
      data() {
        return {
          showSpan: true
        }
      }
    })

    expect(wrapper.find("span").isVisible()).toBe(true)
  })

  it('does not render a Child component', () => {
    const wrapper = mount(Parent)

    expect(wrapper.findComponent(Child).exists()).toBe(false)
  })

  it('does render a Child components', () => {
    const wrapper = mount(Parent, {
      data() {
        return {
          showChild: true
        }
      }
    })

    expect(wrapper.findComponent({ name: 'Child' }).exists()).toBe(true)
  })

  it('renders many children', () => {
    const wrapper = mount(ParentWithManyChildren)

    expect(wrapper.findAllComponents(Child).length).toBe(3)
  })
})