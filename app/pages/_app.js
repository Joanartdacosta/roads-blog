import "@/styles/globals.css";
import Layout from "@/components/common/layout/Layout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />;
      </LocalizationProvider>
    </Layout>
  );
}
