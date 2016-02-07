var Navbar = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav-items">
               <li> <a href="#"><img alt="Brand" src="/images/marie-marie-logo-01.png"/></a></li>
                <li className="nav-right"> Contact </li>
                <li> About </li>
                <li> Twitter </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
});

React.render(<Navbar />, document.getElementById('react-navbar'));
