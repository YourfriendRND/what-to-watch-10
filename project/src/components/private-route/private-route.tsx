import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppPageRoute } from '../../contants';

type PrivateRouteProps = {
  authStatus: AuthorizationStatus,
  children: JSX.Element
}

const PrivateRoute = ({ authStatus, children }: PrivateRouteProps): JSX.Element => (
  authStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppPageRoute.Login} />
);

export default PrivateRoute;
