import React, { useState } from "react";
import { Button, ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./AppTheme";

function App() {

 const [darkMode, setDarkMode] = useState(false);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>     
        
        <Button onClick={ () => { setDarkMode(!darkMode) } } variant="outlined" color="primary">
          Hello World!
        </Button>
        
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
