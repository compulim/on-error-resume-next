import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const rootElement = document.getElementById('root');

rootElement && createRoot(rootElement).render(<App />);
