import "@/styles/globals.css";
import Layout from "@/components/common/layout/Layout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import store from "@/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Component {...pageProps} />;
        </LocalizationProvider>
      </Provider>
    </Layout>
  );
}
