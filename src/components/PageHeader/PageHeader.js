/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import api from './api';


// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends Component{
  state={
    devices: [],
  }

  async componentDidMount(){
    const response = await api.get('api_devices/devices/');

  console.log(response.data);

  this.setState({ devices: response.data});
  }

  render(){

    const { devices } = this.state;

    return(
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Easy IoT</h1>
          <h3 className="d-none d-sm-block">
           Essa é uma plataforma IoT para ser fácil
          </h3>
          <h3>Total de Objetos: {Object.keys(devices).length}</h3>

        </div>
      </Container>
    </div>
  );
  }
}


export default PageHeader;



// export default function PageHeader() {
//   return (
//     <div className="page-header header-filter">
//       <div className="squares square1" />
//       <div className="squares square2" />
//       <div className="squares square3" />
//       <div className="squares square4" />
//       <div className="squares square5" />
//       <div className="squares square6" />
//       <div className="squares square7" />
//       <Container>
//         <div className="content-center brand">
//           <h1 className="h1-seo">Easy IoT</h1>
//           <h3 className="d-none d-sm-block">
//            Essa é uma plataforma IoT para ser fácil
//           </h3>
//         </div>
//       </Container>
//     </div>
//   );
// }