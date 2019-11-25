import 'core-js/stable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { IntlProvider } from 'react-intl';
import messagesEnUs from './locales/en-US.json';
import messagesFrFr from './locales/fr-FR.json';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './components/containers/App';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// redux store
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
));

sagaMiddleware.run(rootSaga);

// localization
const locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || 'en-US';
const messages = {
    'en-US': messagesEnUs,
    'fr-FR': messagesFrFr
};

ReactDOM.render((
    <IntlProvider locale={locale} messages={messages[locale]}>
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>
), document.getElementById('root'));
