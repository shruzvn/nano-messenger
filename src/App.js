import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { enableMobileView } from './app/redux/actions';

import { Light, Dark } from './theme/Colors';
import Messenger from './app/messenger/Messenger';

function App() {
    const darkMode = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        screenResizeListener();
        window.addEventListener("resize", screenResizeListener, false);
        return () => {
            window.removeEventListener("resize", screenResizeListener, false);
        }
        //eslint-disable-next-line
    }, []);

    const screenResizeListener = () => {
        dispatch(enableMobileView(window.innerWidth < 1280));
        setScreenHeight(window.screenHeight);
    }

    return (
        <ThemeProvider theme={darkMode ? Dark : Light}>
            <main style={{ width: "100vw", height: screenHeight + "px" }}>
                <Messenger />
            </main>
        </ThemeProvider>
    )
}

export default App;