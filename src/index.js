import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Header';
import Content from './Content.js'
import Test from './test.js'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <App />
    <Content />
    <Test/>
  </div>
)
    
