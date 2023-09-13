import Emitter from '@/components/Emitter.vue'
import { mount } from '@vue/test-utils'

describe('Emitter', () => {
  it('emits an event with two arguments', () => {
    const wrapper = mount(Emitter)

    // Call the function to emit events.
    wrapper.vm.emitEvent()

    // Show the events emitted.
    // console.log(wrapper.emitted())
    // {
    //   myEvent: [ [ 'name', 'password' ], [ 'age', '23' ] ],
    //   anotherEvent: [ [ 'name', 'password' ] ]
    // }

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
    expect(wrapper.emitted().myEvent[1]).toEqual(['age', '23'])
    expect(wrapper.emitted().anotherEvent[0]).toEqual(['name', 'password'])
  })

  it('emits an event withou mounting the component', () => {
    const events = {}
    const $emit = (event, ...args) => {
      events[event] = [...args]
    }

    Emitter.methods.emitEvent.call({ $emit })
    
    // Apenas mostra os dados do último emit.
    // console.log(events.myEvent)

    expect(events.myEvent).toEqual(['age', '23'])
    expect(events.anotherEvent).toEqual(['name', 'password'])
  })
})