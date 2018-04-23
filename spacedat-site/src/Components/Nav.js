import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/main.css';
import About from './about';
import Header from './header';

const Nav = () => {
    return (
        <Row className="show-grid">
          <nav className='y-web-nav'>
            <Col xs={10} md={10}>
              <nav class="navbar navbar-default">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                      <li>
                        <NavLink className="nav-bar" to="/home"><p>QUIENES SOMOS</p></NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-bar" to="/servicio"><p>SERVICIOS</p></NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-bar" to="/reconocimiento"><p>RECONOCIMIENTOS</p></NavLink></li>
                      <li>
                        <NavLink className="nav-bar" to="/client"><p>CLIENTES</p></NavLink></li>
                      <li>
                        <NavLink className="nav-bar" to="/blog"><p>BLOG</p></NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-bar" to="/contac"><p>CONTACTO</p></NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </Col>
          </nav>
        </Row >
    );
  }
  export default Nav;