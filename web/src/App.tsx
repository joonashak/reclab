import React from 'react';
import { node } from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

const App = ({ element }) => (
  <I18nextProvider i18n={i18n}>
    {element}
  </I18nextProvider>
);

App.propTypes = {
  element: node.isRequired,
};

export default App;
