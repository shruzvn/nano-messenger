import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {enableMobileView} from './app/redux/actions';

import { Light, Dark } from './theme/Colors';
import Messenger from './app/messenger/Messenger';

function App() {
    const darkMode = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        detectMobileMode();
        window.addEventListener("resize", detectMobileMode, false);
        return () => {
            window.removeEventListener("resize", detectMobileMode, false);
        }
        //eslint-disable-next-line
    }, []);

    const detectMobileMode = () => {
        dispatch(enableMobileView(window.innerWidth < 1280));
    }

    return (
        <ThemeProvider theme={darkMode ? Dark : Light}>
            <Messenger />
        </ThemeProvider>
    )
}

export default App;