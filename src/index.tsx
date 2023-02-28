import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import "./fonts/Ubuntu-Bold.ttf"
import "./fonts/Ubuntu-Regular.ttf"
import "./fonts/Ubuntu-Medium.ttf"

import { browserRouter } from './utils/navigations.utils';

import { Provider } from 'react-redux';
import store from './store/store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([...browserRouter]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
