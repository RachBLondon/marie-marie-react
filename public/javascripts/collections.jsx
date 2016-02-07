var Collection = React.createClass({
  // getInitalState : function(){
  //   return {selected:false}
  // },
  render: function(){
    return(
      <div className="collection">
        <h2> {this.props.collectionName}</h2>
        <p> {this.props.description} </p>
      </div>
    );
  }
});

React.render(
  <div>
    <Collection collectionName="Classic" description="Chic and timeless style"/>
    <Collection collectionName="Causal" description="Casual fashion"/>
    <Collection collectionName="Fashion Forward" description="Keep your finger on the pulse of the lastes trends"/>
  </div>,
  document.getElementById('collection-area'));
