import React from 'react';
import { PERSON_PAGE } from '../../constants';
import PersonPage from '../../pages/personPage';
import PrivateRoute from '../../components/privateRoute';
import { Route, Redirect } from 'react-router-dom';

const DashLayOut = () => {
    return (
        <>
            <Route path = {PERSON_PAGE} exact={true} >
                <PersonPage/>
            </Route>
        </>
    )
}

export default DashLayOut
