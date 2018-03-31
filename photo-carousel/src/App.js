import React, { Component } from 'react';
import logo from './logo.svg';
import {imagesArray} from './data/images.js';
import {ImageComponent} from './components/imageComponent';
import {ButtonComponent} from './components/ButtonComponent';
import {ProgressComponent} from './components/ProgressComponent';
import './App.css';

class App extends Component {
  state = {
    imagesArray,
    currentImage: 0
  }
  
  //want image number to increase as it goes "right", decrease as it goes "left" 
  handleClick(direction){
    if (direction  =='left'){
      this.setState({
        currentImage: (this.state.currentImage === 0) ? 4 : this.state.currentImage - 1
      })
    } else {
      this.setState({
        currentImage: (this.state.currentImage === 4) ? 0 : this.state.currentImage + 1
      })  
    }
  }

  render() {
    return (
      <div className="App">
        <ImageComponent imageUrl={imagesArray[this.state.currentImage]} />
        <ProgressComponent currentIndex={(this.state.currentImage +1)} numberOfImages={this.state.imagesArray.length}/>
        <ButtonComponent handleClick={() => this.handleClick('left')} label='Left' />
        <ButtonComponent handleClick={() => this.handleClick('right')} label='Right' />
      </div>
    );
  }
}

export default App;
