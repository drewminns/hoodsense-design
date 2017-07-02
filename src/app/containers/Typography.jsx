import React, { Component } from 'react';

import Button from '../Components/Button/Button';

class Typography extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <Button />
          </div>
        </div>
      </div>
    )
  }
}

export default Typography;
