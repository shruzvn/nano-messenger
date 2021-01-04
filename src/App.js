import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { enableMobileView } from './app/redux/actions';

import { Light, Dark } from './theme/Colors';
import Messenger from './app/messenger/Messenger';

function App() {
    const darkMode = useSelector(state => state.darkMode);
    const dispatch = useDispatch();

    const [screen, setScreen] = useState({ width: window.innerWidth, height: window.innerHeight });

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
        if (window.innerHeight + 300 > screen.height && window.innerWidth !== screen.width)
            setScreen({height: window.innerHeight, width: window.innerWidth});
    }

    return (
        <ThemeProvider theme={darkMode ? Dark : Light}>
            <main style={{ width: "100%", height: screen.height + "px" }}>
                <Messenger />
            </main>
        </ThemeProvider>
    )
}

export default App;