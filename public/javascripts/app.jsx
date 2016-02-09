var Content = React.createClass({
  getInitialState: function(){
    return {shopping: false}
  },
  shopping: function(){
    this.setState({shopping:true});
  },

  renderIndexPage: function(){
    return (<div>
              <h1> Index Page </h1>
              <button onClick={this.shopping} className="btn btn-success btn-sm"/>
            </div>)
  },
  renderCollectionsPage: function(){
      return(<div>
              <h1>Collections hello worlds</h1>
              </div>);
  },

  render: function(){
    if (this.state.shopping){
      return this.renderCollectionsPage();
    } else {
      return this.renderIndexPage();
    }


}
});

var App = React.createClass({
  render: function(){
    return (
      <Content/>);
  }
});

React.render(
  <App/>,
  document.getElementById('react-container'));
