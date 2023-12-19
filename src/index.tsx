import './style.css';
import {render}                from 'solid-js/web';
import {Router}                from '@solidjs/router';
import {App}                   from './app';
import {GlobalContextProvider} from './globals/ContextApi';

const dispose = render(() =>
        <Router>
            <GlobalContextProvider>
                <App/>
            </GlobalContextProvider>
        </Router>
    , document.getElementById('app'));

/**
 * Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 * Learn more: https://www.snowpack.dev/#hot-module-replacement
 *
 * Note: Solid doesn't support state preservation on hot reload
 */
if (import.meta.env.MODE === 'development') {
    import.meta.hot.accept();
    import.meta.hot.dispose(dispose);
}
