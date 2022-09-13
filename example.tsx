import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
ReactDOM.render(
  <Router>
    <div>
      <header>
        <div>
          FUI
        </div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Routes>
            <Route path="/icon" element={<IconExample />}/>
            <Route path="/button" element={<ButtonExample />}/>
            <Route path="/dialog" element={<DialogExample />}/>
          </Routes>
        </main> 
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));