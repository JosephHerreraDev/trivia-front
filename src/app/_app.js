import { ScoreProvider } from "../context/ScoreContext";

function MyApp({ Component, pageProps }) {
  return (
    <ScoreProvider>
      <Component {...pageProps} />
    </ScoreProvider>
  );
}

export default MyApp;
