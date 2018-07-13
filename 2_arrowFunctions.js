// you need to bind this so that the increment method can be passed to other classes
class MyOldCounter {
  constructor() { 
    this.count = 0
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.count++
  }
}


class MyForm extends React.Component() {
  constructor(props) {
    super(props)
    this.state({
      counter: 11
    })
  }

  incrementCounter = () => {
    const { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }

  render() {
    <form action="">
      {this.state.counter}
      <button onClick={this.incrementCounter} />
    </form>
  }
}


// this is auto-bound (new syntax, requires babel plugin)
class MyNewCounter {
  constructor() {
    this.count = 0
  }

  increment = () => {
    this.count++
  }
}

// real javascript usecase:
var leo = {
  name: 'Leo',
  waitThenSayHello: function() {
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
    }, 1000);
  }
};
