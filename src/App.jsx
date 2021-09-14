import React from 'react';
import { AppRouter } from './router/AppRouter';
import { CrudProvider } from './context/crud/crudProvider';

export const App = () => {
    return (
        <CrudProvider>
            <AppRouter />
        </CrudProvider>
    )
}

