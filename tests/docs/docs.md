# Testes

## Testing events without mounting the component

- Since $emit is just a JavaScript object, you can mock $emit, and by using call to attach it to the this context of emitEvent. By using call, you can call a method without mounting the component.

Using call can be useful in situations where you have some heavy processing in lifecycle methods like created and mounted that you don't want to execute. Since you don't mount the component, the lifecycle methods are never called. It can also be useful when you want to manipulate the this context in a specific manner.

Generally, you don't want to call the method manually like we are doing here - if your component emits an event when a button is clicked, then you probably want to do wrapper.find('button').click() instead. This article is just to demonstrate some other techniques.

