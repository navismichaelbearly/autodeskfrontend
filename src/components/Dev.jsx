import React from "react";
import Nav from './Nav';
import { Link } from "react-router-dom";
import { getType } from '../Helper';

class Api extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      typeofdoc: []
    };
  }

  componentDidMount(){
    this.setState({
      typeofdoc : getType(this.props.match.params.type)
    });
   }

  render() {
    return (
      <>
      <Nav/>
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <h1 className="mt-5">Developers Guide for {this.state.typeofdoc}</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p><Link to="/">Back</Link></p>
        </div>
      </main>
      </>
    );
  }
}

export default Api;
