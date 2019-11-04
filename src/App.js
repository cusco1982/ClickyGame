import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

import Nav from "./components/Nav";

function shuffleCards(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    // clicked: friends.clicked
    errmsg: "",
    clicked: [],
    score: 0,
    topScore: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };     



  // // try to fix later

  //   handleClick = (id, clicked) => {

  //     if (clicked === false) {
  //       friends.forEach((friend, index) => {
  //         if (id === friend.id) {
  //           console.log(friend.clicked)
  //           console.log(this.state.clicked)
  //           // this.setState{ (friends.clicked: true)
  //         }
  //       })
  //     } else {
  //       console.log("already clicked");
  //     }
  //   };


  // if (this.state.clicked.indexOf(id) === -1) {
  // this.handleIncrement();
  // this.setState({ clicked: this.state.clicked.concat(id) });
  // } else {
  // this.handleReset();
  // }
  // };
 

  resetGame = () => {
    this.setState({
      clicked: [],
      score: 0,
      errmsg: "game over, try again!"
    });
  };
  
  handleScores = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      errmsg: ""
    });
    // console.log("shuffleCards()");
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });

    } if (newScore === 10) {
      this.setState({ 
        errmsg: "You Win!" ,
        score: 0,
        clicked:[]
      });
      console.log(this.state.clicked);
      // console.log("win")
      // this.resetGame();
    }
  };

  shuffleCards = () => {
    let shuffledCards = shuffleCards(friends);
    this.setState({ friends: shuffledCards });
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      // console.log("increaseScore()");
      // console.log("check/updateTopScore()");
      this.shuffleCards();
      this.handleScores();
      // console.log("clicked:", id);

      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetGame();
      // console.log("game over, try again")
      // console.log(this.state.clicked);
    }
  };






  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Nav
          title="Clicky Game"
          errmsg={this.state.errmsg}
          score={this.state.score}
          topScore={this.state.topScore}
        />


        <Title>Clicky Game! Try to click every icon without repitition!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            handleClick={this.handleClick}
            resetGame={this.resetGame}
            handleScores={this.handleScores}
            shuffleCards={this.shuffleCards}

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
