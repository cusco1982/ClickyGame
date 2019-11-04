import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

import Nav from "./components/Nav";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  handleClick = (id, clicked) => {
    
    if (clicked === false) {
      console.log("hello");
    }
  };


  // if (this.state.clicked.indexOf(id) === -1) {
  // this.handleIncrement();
  // this.setState({ clicked: this.state.clicked.concat(id) });
  // } else {
  // this.handleReset();
  // }
  // };

  // handleClick = id => {
  //   if (this.state.clicked.indexOf(id) === -1) {
  //     this.handleIncrement();
  //     this.setState({ clicked: this.state.clicked.concat(id) });
  //   } else {
  //     this.handleReset();
  //   }
  // };


  // handleShuffle = () => {
  //   let shuffledFriends = shuffleFriends(friends);
  //   this.setState({ friends: shuffledFriends });
  // };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Nav
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />


        <Title>Clicky Game! Try to click every icon without repition!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            handleClick={this.handleClick}

            key={friend.id}
            id={friend.id}
            image={friend.image}
            // location={friend.location}
            // name={friend.name}
            // occupation={friend.occupation}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
