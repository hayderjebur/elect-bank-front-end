import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const authContext = useContext(AuthContext);
  // const { isAuthenticated, loading } = authContext;
  // <PrivateRoute exact path="/" component={Home} />
  return (
    <Route
      {...rest}
      // render={props =>
      //   !isAuthenticated && !loading ? (
      //     <Redirect to="/login" />
      //   ) : (
      //     <Component {...props} />
      //   )
      // }
    />
  );
};

export default PrivateRoute;
