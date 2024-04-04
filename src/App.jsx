import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';

// The main component of the app, wrapping everything in LanguageProvider for context
const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector App</h1>
        <LanguageSelector /> {/* Component to select the language */}
        <Greeting /> {/* Component to display a greeting in the selected language */}
      </div>
    </LanguageProvider>
  );
};

export default App;