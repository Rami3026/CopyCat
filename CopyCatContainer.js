import React from 'react';
import ReactDOM from 'react-dom';
import CopyCat from '../components/CopyCat';

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying })
  }

  render() {
    return <CopyCat copying={this.state.copying} toggleTape={this.toggleTape}/>
  };
}

ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));