import { memo} from "react";
import AppRouter from "./Routes/AppRouter";
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
       <ToastContainer />
      <AppRouter />
    </>
  );
}

export default memo(App);
