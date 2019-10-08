import './styles/index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { RecipeBook } from './components/RecipeBook/RecipeBook';
import recipeReducer from './RecipeReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(recipeReducer as any)

console.log("store", store.getState());

export const unsubscribe = store.subscribe(() =>
  console.log("State Changed", store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <RecipeBook />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker();
