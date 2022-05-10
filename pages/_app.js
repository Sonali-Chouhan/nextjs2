import '../styles/globals.css';
import {Provider} from "react-redux";
import {store,wrapper} from "./Redux/Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function MyApp({ Component, pageProps }) {



  return (
    <>
    <Provider store={store}>
      <center>
      <Header/>
      <Component {...pageProps} />
      </center>
      </Provider>
      </>
  )
}

export default wrapper.withRedux(MyApp)

  


