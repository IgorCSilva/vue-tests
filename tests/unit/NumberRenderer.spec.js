
import { mount } from '@vue/test-utils'
import NumbersRenderer from '@/components/NumbersRenderer.vue'

describe('NumbersRenderer', () => {
  it('renders even numbers', () => {
    const wrapper = mount(NumbersRenderer, {
      props: {
        even: true
      }
    })

    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  it("renders odd numbers", () => {
    const localThis = { even: false }
    // vue automatically binds props to this. We are not rendering the component with mount, though, so Vue isn't binding anything to this.

    // So we need to use call, which lets us bind an alternative this object, in our case, one with a even property.

    expect(NumbersRenderer.computed.numbers.call({ even: false })).toBe("1, 3, 5, 7, 9")
  })

  it("don't pass required parameter even", () => {
  
    expect(NumbersRenderer.computed.numbers()).toBe('')
  })
})