import "@/styles/index.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="text-black bg-light-white font-inter">
      <Component {...pageProps} />
    </main>
  );
};

export default App;
