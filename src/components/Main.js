import React from "react";
import options from  "../options.json";


class Main extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore: 0,
    optionsLeft: options
  };


  //check function
  	//if clicked id is in the array -> filter out of array and add a point
  	//if points > current top score, then update top score to equal current score
  	//then reshuffle items randomly on page
  	//else if clicked id is not in the array -> reset game/reshuffle
  check = id => {
  	if (this.optionsLeft.includes(id)) {
  		this.optionsLeft.filter(option => this.id !== id);

      this.setState({ score: this.state.score + 1 });

  		if (this.score > this.topScore) {
			 this.setState({ topScore: this.state.score });
  		}
      
  	}
  }


  render() {
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
        {this.state.optionsLeft.map(item => (
          <div 
            className="list-group-item"
            key={item.id}
            id={item.id}
            onClick={this.check}
          >
            <img src={item.image}/>
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
