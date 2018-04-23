import React, { Component } from 'react';
import { connect, Connect } from 'redux-zero/react';
import './App.css';
import {Header} from './Components/Header';

const App = ({personal}) => {
  return (
    <div>
      <Header name={} who={}/>
    </div>
  );
}

const mapToProps = ({personal}) => ({personal});
export default Connect (mapToProps)(App);