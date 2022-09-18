import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss';

const logo = require('./logo.png');
ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="70" height="70" alt="" />
          <span> Random UI </span>
        </div>
      </Header>
    <Layout>
    <Aside className="site-aside">
      <h2>Component</h2>
      <ul>
        <li>
          <NavLink to="/icon">Icon</NavLink>
        </li>
        <li>
          <NavLink to="/button">Button</NavLink>
        </li>
        <li>
          <NavLink to="/dialog">Dialog</NavLink>
        </li>
        <li>
          <NavLink to="/layout">Layout</NavLink>
        </li>
      </ul>
    </Aside>
        <Content className="site-main">
          <Routes>
            <Route path="/icon" element={<IconDemo />}/>
            <Route path="/button" element={<ButtonExample />}/>
            <Route path="/dialog" element={<DialogExample />}/>
            <Route path="/layout" element={<LayoutExample />}/>
          </Routes>
        </Content>
    </Layout>
        <Footer className="site-footer">
          &copy; liuchengcheng1999
        </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));