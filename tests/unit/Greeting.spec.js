import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    // Montando o componente. Isso retorna um wrapper com funções que auxiliam nos testes.
    const wrapper = mount(Greeting)

    // Verify if the component content is right.
    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})