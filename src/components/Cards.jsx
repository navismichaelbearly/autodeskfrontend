import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav';
import $ from 'jquery';
import Dev from "./Dev";
import Api from "./Api";
import Intro from "./Intro";
import axios from 'axios';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
        .get("../data.json")
        .then(function(result) {
          _this.setState({
            cards: result.data
          });
        })
    $(document).ready(function() {
      $( ".card" ).hover(
        function() {
          $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function() {
          $(this).removeClass('shadow-lg');
        }
      );
    });
  }

  render() {
    let cardlist = "No list found";
    const allCards = this.state.cards.map((card, index) => (
      <div className="col-xs-12 col-sm-6 col-md-4 mt-4">
      <div className="card h-100 ">
        <div className="card-body">
        <div className="d-flex">
          <img className="img-fluid pt-1" style={{height:'30px',width: '30px'}} src={ card.icon }/>
          <span className="card-title pt-1 pl-1">{card.name}</span>
          </div>
          <p className="card-text">{card.description}</p>
          <div className="mt-40  align-bottom">
          <ul className="list-group list-group-flush align-bottom">
          {
            card.items.map((linkdata, index) => (
              <li key={index} className="list-group-item ">
                <Link to={linkdata.connect}>{linkdata.name}</Link>
              </li>
            ))
          }
          </ul>
          </div>

        </div>
      </div>
      </div>
    ));
    const noCard = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No cards yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <Nav/>
        <div className="py-5">
          <main className="container">
            <div className="text-left">
              <h3>APIs & Services</h3>
              <p>Access information on how to use Forge APIs and Services</p>
            </div>
            <div className="row">
              {this.state.cards.length > 0 ? allCards : noCard}
            </div>
          </main>
        </div>
      </>
    );
  }

}
export default Cards;
