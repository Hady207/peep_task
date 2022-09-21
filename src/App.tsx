import { Provider } from "react-redux";
import Root from "./pages/Root";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
