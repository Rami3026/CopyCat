import React from 'react';
import React from 'react';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {
  render() {
    return (
      <div>
        <h1>Copy Cat</h1>

        <img alt='cat'
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
        />
      </div>
    );
  };
}

export default CopyCat;
