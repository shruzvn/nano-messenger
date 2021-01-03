import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Light, Dark } from './theme/Colors';
import Messenger from './app/messenger/Messenger';

function App() {
    const [darkMode, enableDarkMode] = useState(true);
    return (
        <ThemeProvider theme={darkMode ? Dark : Light}>
            <Messenger darkMode={darkMode} onThemeChange={() => { enableDarkMode(!darkMode) }} />
        </ThemeProvider>
    )
}

export default App;