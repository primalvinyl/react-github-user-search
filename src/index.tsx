import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { IntlProvider } from 'react-intl';
import messagesEnUs from './locales/en-US.json';
import messagesFrFr from './locales/fr-FR.json';
import App from './App';

// localization
const locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || 'en-US';
const messages = {
    'en-US': messagesEnUs,
    'fr-FR': messagesFrFr
};

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages[locale]}>
        <Provider store={store}>
            <App />
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);
