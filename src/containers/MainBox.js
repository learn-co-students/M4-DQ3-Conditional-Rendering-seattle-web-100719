import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super();
    this.state = {
      detailsToDisplay: <Profile />
    }
  }

  handleClick = (event) => {
      // console.log(event.target);
      switch(event.target.id){
        case 'profile':
          this.setState({
            detailsToDisplay: <Profile />
          });
          break;
        case 'photo':
          this.setState({
            detailsToDisplay: <Photos />
          });
          break;
        case 'cocktail':
          this.setState({
            detailsToDisplay: <Cocktails />
          });
          break;
        case 'pokemon':
          this.setState({
            detailsToDisplay: <Pokemon />
          });
          break;
        default:
          console.log("how did you get here?")
      }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar handleClick={this.handleClick} 
        profileRef={this.profileRef}
        photoRef={this.photoRef}
        cocktailRef={this.cocktailRef}
        pokemonRef={this.pokemonRef}
        />
        {this.state.detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
