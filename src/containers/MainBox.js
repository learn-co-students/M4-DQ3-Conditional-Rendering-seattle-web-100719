import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 'profile'
    }
  }

  handleMenuBar = (selection) => {
    this.setState({selected: selection.target.id})
  }

  conditionalRender = () => {
    if (this.state.selected === "profile") {
      return <Profile />
    } else if (this.state.selected === "photo") {
      return <Photos />
    } else if (this.state.selected === "cocktail") {
      return <Cocktails />
    } else {
      return <Pokemon />
    }
  }

  

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.conditionalRender()}</div>

    return (
      <div>
        <MenuBar class={this.state.selected} menuSelection={this.handleMenuBar}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
