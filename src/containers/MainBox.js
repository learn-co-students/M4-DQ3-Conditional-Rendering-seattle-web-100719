import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "profile",
      currentComponent: <Profile />
    };
  }

  pageContent = () => {
    switch (this.state.currentPage) {
      case "profile":
        this.setState({
          currentComponent: <Profile />
        })
        break;
      case "photo":
          this.setState({
            currentComponent: <Photos />
          })
        break;
      case "cocktail":
          this.setState({
            currentComponent: <Cocktails />
          })
        break;
      case "pokemon":
          this.setState({
            currentComponent: <Pokemon />
          })
        break;
      default:
        <Profile />;
    }
  };

  setPageState = pageState => {
    this.setState({
      currentPage: pageState
    }, this.pageContent);
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar onNavSelection={this.setPageState}/>
        {this.state.currentComponent}
      </div>
    );
  }
}

export default MainBox;
