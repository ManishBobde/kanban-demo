import React, { Component } from "react";
import Card from "../Cards/Card";

export default class TabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: [
        {
          name: "Winnie",
          cards: ["Buys eggs from grocery", "Remind me of drinking water"]
        },
        {
          name: "George",
          cards: ["Buys eggs from grocery", "Remind me of drinking water"]
        },
        {
          name: "Bob",
          cards: ["Buys eggs from grocery", "Remind me of drinking water"]
        },
        {
          name: "Thomas",
          cards: ["Buys eggs from grocery", "Remind me of drinking water"]
        }
      ]
    };
    /*this.addCard = this.addCard.bind(this);*/
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  addCard = name => {
    let cardData = window.prompt("Please add a card");
    console.log(this.state.tabNames, name, cardData);
    this.state.tabNames
      .filter(tab => tab.name === name)
      .map(data =>
        this.setState({
          tabNames: Object.assign(
            this.state.tabNames,
            data.cards.push(cardData)
          )
        })
      );
  };

  moveLeft = (data, card, tabIndex, cardIndex) => {
    console.log(data, card, cardIndex);
    if (tabIndex === 0) return;
    this.setState({
      tabNames: Object.assign(
        this.state.tabNames,
        this.state.tabNames[tabIndex - 1].cards.push(card)
      )
    });
    this.state.tabNames[tabIndex].cards.splice(cardIndex, 1);
  };

  moveRight = (data, card, tabIndex, cardIndex) => {
    if (tabIndex === this.state.tabNames.length - 1) return;
    this.state.tabNames[tabIndex].cards.splice(cardIndex, 1);
    this.setState({
      tabNames: Object.assign(
        this.state.tabNames,
        this.state.tabNames[tabIndex + 1].cards.push(card)
      )
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.tabNames.map(
            (tabData, index) =>
              tabData && (
                <div key={`${tabData.name}-${index}`} className="tabData">
                  <p>{tabData.name}</p>
                  <Card
                    tabIndex={index}
                    tab={tabData.name}
                    moveLeft={this.moveLeft}
                    moveRight={this.moveRight}
                    cardData={tabData.cards}
                  />
                  <button
                    className="button"
                    onClick={() => this.addCard(tabData.name)}
                  >
                    Add card
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}
