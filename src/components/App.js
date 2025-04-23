import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemData,
      isDarkMode: false,
    };
  }

  handleDarkModeClick = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { items, isDarkMode } = this.state;
    const appClass = "App " + (isDarkMode ? "dark" : "light");

    return (
      <div className={appClass}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={items} />
      </div>
    );
  }
}

export default App;