import {ThemeProvider} from 'styled-components';

import {Light} from './theme/Colors';

function App(){
    return(
        <ThemeProvider theme={Light}>
            <h1>Hello World</h1>
        </ThemeProvider>
    )
}

export default App;