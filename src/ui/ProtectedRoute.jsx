import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // load authed user
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("login");
  }, [isAuthenticated, isLoading, navigate]);

  //while loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if no authed user redirect to the login

  //if user authed render the app

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
