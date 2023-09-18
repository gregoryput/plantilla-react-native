import { Provider as PaperProvider } from "react-native-paper";
import LayoutNav from "./src/Navegation/Index";
import ThemePaper from "./src/hook/ThemePaper";
import { Provider } from "react-redux";
import store from "./src/redux/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={ThemePaper}>
          <LayoutNav />
        </PaperProvider>
      </Provider>
    </>
  );
}
