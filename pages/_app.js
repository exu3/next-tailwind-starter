import "../styles/globals.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
