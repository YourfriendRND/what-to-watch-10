import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppPageRoute } from '../../contants';
import { useAppSelector } from '../../hooks/index';


type PrivateRouteProps = {
  children: JSX.Element
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const userAuthStatus = useAppSelector((state) => state.authorizationStatus);
  return (userAuthStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppPageRoute.Login} />);
};

export default PrivateRoute;
