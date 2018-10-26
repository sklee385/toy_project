import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Root);

if (module.hot) {
    module.hot.accept('./client/Root', () => { render(Root) })
}

//ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
