import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <button className='flex place-items-center mt-4 lg:inline-block lg:mt-0
         text-red-400 hover:text-white mr-4 text-2xl hover:animate-pulse px-10 pt-9' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button className='flex place-items-center mt-4 lg:inline-block lg:mt-0
    text-red-400 hover:text-white mr-4 text-2xl hover:animate-pulse px-10 pt-9' onClick={() => loginWithPopup()}>Log in</button>;
  }
}

export default LoginButton;