import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  // load authed user
  const { user, isLoading } = useUser();
  //while loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if no authed user redirect to the login

  //if user authed render the app

  return children;
};

export default ProtectedRoute;
