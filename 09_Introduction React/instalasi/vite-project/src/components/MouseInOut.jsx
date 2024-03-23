import React from 'react';

class MouseInOut extends React.Component {
  handleMouseIn = () => {
    console.log('Mouse masuk');
  };

  handleMouseOut = () => {
    console.log('Mouse keluar');
  };

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseIn}
        onMouseLeave={this.handleMouseOut}
        style={{ border: '1px solid black', padding: '20px', margin: '20px', display: 'inline-block' }}
      >
        <h2>Halaman dengan Mouse In dan Mouse Out</h2>
        <p>Coba arahkan mouse Anda ke dalam dan keluar dari kotak ini.</p>
      </div>
    );
  }
}

export default MouseInOut;
