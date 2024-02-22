// import { Modal } from './components/Modal/Modal';
import { Main } from "./pages/Main/Main";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain="dev-4uo4rsnwn3xm5phh.us.auth0.com"
      clientId="nNMsIh89z7Cutb2Z9uNjqjr1vzIaKJaW"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Main />
      {/* <Modal /> */}
    </Auth0Provider>
  );
}

export default App;
