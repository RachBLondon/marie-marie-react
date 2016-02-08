var Collection = React.createClass({
  // getInitalState : function(){
  //   return {selected:false}
  // },
  render: function(){
    return(
      <div className="collection col-md-4" id={this.props.id}>
        <h2> {this.props.collectionName}</h2>
        <p> {this.props.description} </p>
      </div>
    );
  }
});



React.render(
  <div>
    <Collection collectionName="Classic" description="Chic and timeless style" id="classic"/>
    <Collection collectionName="Causal" description="Casual fashion" id="causal"/>
    <Collection collectionName="Fashion Forward" description="Keep your finger on the pulse of the lastes trends" id="fashion"/>
  </div>,
  document.getElementById('collection-area'));
