import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { configureStore } from '@reduxjs/toolkit';
import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n/client';
import elementsReducer from './features/element/elementsSlice';
import elementReducer from './features/element/elementSlice';

const store = configureStore({
  reducer: {
    elements: elementsReducer,
    element: elementReducer,
  },
});

const theme = createTheme({
  palette: {
    secondary: red,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'none',
        size: 'small',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            backgroundColor: '#FFF',
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            backgroundColor: '#FFF',
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
