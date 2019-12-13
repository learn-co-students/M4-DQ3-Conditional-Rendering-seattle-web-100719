import React from 'react'

class MenuBar extends React.Component {
  constructor() {
    super();
  }

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  handleMenuSelection = (event) => {
    event.persist()
    this.props.menuSelection(event)
  }

  activateMenuBar = (id) => {
    if (id === this.props.class) {
      return "item active"
    } else {
      return "item"
    }
  }

  render() {
  return (
    <div className="ui four item menu">
      <a className={this.activateMenuBar('profile')} id="profile" onClick={this.handleMenuSelection}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={this.activateMenuBar('photo')} id="photo" onClick={this.handleMenuSelection}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className={this.activateMenuBar('cocktail')} id="cocktail" onClick={this.handleMenuSelection}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={this.activateMenuBar('pokemon')} id="pokemon" onClick={this.handleMenuSelection}> 
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )
}
}

export default MenuBar
