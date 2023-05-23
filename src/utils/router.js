import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Admin from "../components/Admin";
import Login from "../components/Account/Login";
import Register from "../components/Account/Register";
import Root from "../components/Root";
import Account from "../components/Account/Account";
import AuthGuard from './guards/AuthGuard'
import {
   ACCOUNT_PATH,
   ADMIN_PATH,
   HOME_PATH,
   LOGIN_PATH,
   REGISTER_PATH
} from "./routeConstants";

export const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route path={HOME_PATH} element={<Root />} />
         <Route path={ADMIN_PATH} element={<Admin />} />
         <Route path={ACCOUNT_PATH} element={<Account />}>
            <Route index element={<AuthGuard element={<Navigate to={HOME_PATH} replace />} />} />
            <Route path={LOGIN_PATH} element={<Login />} >
               <Route index element={<Navigate to={LOGIN_PATH} />} />
            </Route>

            <Route path={REGISTER_PATH} element={<Register />} />
         </Route>
         <Route path="*" element={<HOME_PATH />} />
      </>
   ));

