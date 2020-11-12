import { withTina } from "tinacms";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

function Button() {
  return <button onClick={() => alert("Good day to ya")}>Hello</button>;
}

export const Widget = {
  __type: "toolbar:widget",
  name: "button",
  weight: 5,
  component: Button,
};

export default withTina(App, {
  enabled: true,
  sidebar: true,
  toolbar: true,
  plugins: [Widget],
});
