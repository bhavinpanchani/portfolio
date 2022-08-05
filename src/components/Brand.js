import React, { Component } from 'react';
import '../css/Brand.css';
import Bhavin from '../assets/Bhavin_crop.jpg'
// import axios from 'axios';

// const api = axios.create({
//   // baseURL: `http://study-on.us-east-1.elasticbeanstalk.com/`
//   baseURL: `http://127.0.0.1:8080/`
// })

// function Brand() {
//   return (
//     <div className="Brand">
//       <div className='brand-content'>
//         <h1 className='name'>BHAVIN PANCHANI</h1>
//         <h3 className='occupation'>Full Stack Developer</h3>
//       </div>
//     </div>
//   );
// }

class Brand extends Component {

  // constructor() {
  //   super()
  //   api.get('university/',
  //     // {
  //     //   mode: 'no-cors'
  //     // }
  //   ).then(res => {
  //     console.log(res.data)
  //   })
  // }

  render() {
    return (
      <div className="Brand">
        <div className='brand-content'>
          <img className='Bhavin_photo' src={Bhavin} alt='Bhavin_photo'></img>
          <h1 className='name'>BHAVIN PANCHANI</h1>
          <h3 className='occupation'>Full Stack Developer</h3>
        </div>
      </div>
    )
  }
}

export default Brand;
