import React from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App';

import 'bootstrap'; // Import Bootstrap’s JavaScript
import 'popper.js'; // Import Bootstrap’s dependencies
import 'jquery'; // Import Bootstrap’s dependencies
import './assets/scss/main.scss';

createRoot(document.getElementById('root')).render(<App />);