import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super(),
      this.state = {
        selection: ""
      }
  }

  detailsToDisplay = () => {
    if (this.state.selection === "profile") {
      return <Profile />
    } else if (this.state.selection === "photo") {
      return <Photos />
    } else if (this.state.selection === "cocktail") {
      return <Cocktails />
    } else if (this.state.selection === "pokemon") {
      return <Pokemon />
    }
  }

  selectionChange = (id) => {
    this.setState({ selection: id })
  }


  render() {
    return (
      <div>
        <MenuBar onSelectionChange={this.selectionChange} />
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
