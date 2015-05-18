var React = require('react');

var ReactMixin = {
  getInitialState() {
    return { count: 0 };
  },
  componentWillMount() {
    console.log('will mount');
  },
  incrementCount() {
    this.setState({ count: this.state.count+1 });
  }
};

var App = React.createClass({
  render() {
    return (
      <div>
        <Button txt="button text" />
        <br />
        <Label txt="label text" />
      </div>
    );
  }
});

var Button = React.createClass({
  mixins: [ReactMixin],
  render() {
    return (
      <button onClick={this.incrementCount}>{this.props.txt} -- { this.state.count } </button>
    );
  }
});

var Label = React.createClass({
  mixins: [ReactMixin],
  componentWillMount() {
    setInterval(this.incrementCount, 1000);
  },
  render() {
    return (
      <label>{ this.props.txt } -- { this.state.count }</label>
    );
  }
});

React.render(<App />, document.body);