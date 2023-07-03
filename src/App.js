import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";

import GlobalStyle from "./styles/Global";
import theme from "./styles/theme";
import Post from "./routes/Post";
import Elements from "./routes/Elements";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/category/:id" element={<Post />}></Route>

            <Route path="/elements" element={<Elements />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
