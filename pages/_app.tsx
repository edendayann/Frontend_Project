import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeContext } from "../theme-contexs";


const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`App-${theme}`}>
            <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
    </SessionProvider>
  );
};

export default App;
