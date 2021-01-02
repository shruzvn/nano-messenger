import {ThemeProvider} from 'styled-components';

import {Light} from './theme/Colors';
import Messenger from './app/messenger/Messenger';

function App(){
    return(
        <ThemeProvider theme={Light}>
            <Messenger/>
        </ThemeProvider>
    )
}

export default App;