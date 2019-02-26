import React, { Component } from 'react';
import './App.css';
import ChatBubble from "./component/chat_bubble/ChatBubble";
import peopleOne from "./resources/assets/peopleOne.jpg";
import peopleTwo from "./resources/assets/peopleTwo.png";

class App extends Component {
  render() {
      const primaryColor = "#735FF3";
      const secondaryColor = "white";

    return (
      <div className="App">
        <header className="App-header">
          <ChatBubble own={false}
                        text="Hi, how are you? I just finished the Javascript class and I want to explore more! What do you recommend to me? Thanks!"
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                        img={peopleTwo}/>
          <ChatBubble own={true}
                      text="Hey 👋! You probably want to look at a Framework/Library like Angular or ReactJS, maybe NodeJS if you plan to learn backend. Keep working!"
                      primaryColor={primaryColor}
                      secondaryColor={secondaryColor}
                      img={peopleOne}/>
        </header>
      </div>
    );
  }
}
/*
* text="Hi, You should start learning about a Framework like Angular/ReactJS, or maybe take a look at NodeJS may be a good idea since you already know javascript"
* */

export default App;
