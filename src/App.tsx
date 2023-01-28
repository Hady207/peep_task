import { Provider } from "react-redux";

import { store } from "./redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
