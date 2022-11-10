import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store, persistor } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/pet-support">
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <ToastContainer autoClose={2500} position="top-center" />
              <App />
          </ThemeProvider>
        </BrowserRouter>
      {/* </PersistGate>
    </ReduxProvider> */}
  </StrictMode>
);
