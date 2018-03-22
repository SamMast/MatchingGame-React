import React from "react";
import options from  "../options.json";


class Main extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore: 0,
    optionsLeft: options
  };

  guesses = []

  //check function
  checkClick = event => {
    event.preventDefault();
    console.log(event.target.id); //this is the id of the clicked item

    //if clicked id is in not the guesses array -> push it into array and add 1 to the score
  	if (this.guesses.indexOf(event.target.id) === -1) {
      this.guesses.push(event.target.id);

      this.setState({ score: this.state.score + 1 });
      
      //if points > current top score, then update top score to equal current score
  		if (this.state.score + 1 > this.state.topScore) {
			  this.setState({ topScore: this.state.score + 1 });
  		}

  	} else {
    //else if clicked id is not in the optionsLeft object -> reset game states and reshuffle
      this.guesses = [];

      this.setState({
        score: 0,
        optionsLeft: options
      });
   
    }
  }


  render() {

    console.log(this.state.optionsLeft)

    //clone the options and shuffle them up
    var fullOptions = [...options]
    var n = fullOptions.length;
    var tempArr = [];
    for ( var i = 0; i < n-1; i++ ) {
      // The following line removes one random element from arr
      // and pushes it onto tempArr
      tempArr.push(fullOptions.splice(Math.floor(Math.random()*fullOptions.length),1)[0]);
    }
    // Push the remaining item onto tempArr
    tempArr.push(fullOptions[0]);
    //set fullOptions to equal the new shuffled tempArr
    fullOptions=tempArr; 

    return (
    	<div>
  			<nav className="navbar">
  				<ul>
  					<li className="brand"><a href="/">Memory Game</a></li>
  					<li>Click an image to begin!</li>
  					<li>Score: {this.state.score} | Top Score: {this.state.topScore}</li>
  				</ul>
  			</nav>

	    	<header className="header">
	    		<h1>Memory Game!</h1>
	    		<h2>Click on an image to earn points, but don't click on any image more than once!</h2>
	    	</header>

  			<main className="container">
          {fullOptions.map(item => (
            <div 
              className="list-group-item"
              key={item.id}
              id={item.id}
              onClick={this.checkClick}
            >
              <img 
                src={item.image}
                key={item.id}
                id={item.id}
                alt={item.name}
              />
            </div>
          ))}
  			</main>

  			<footer className="footer ">
  				<div className="bottom"><a href="https://github.com/SamMast/memorygame-react">Memory Game Github!</a></div>
  			</footer>
		  </div>
    );
  }

}

export default Main;
