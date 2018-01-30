import React from "react";
import { DrawerNavigator } from "react-navigation";

import UserProfile from './UserProfile/UserProfile';

const Drawer = DrawerNavigator(
  {
    UserProfile: { screen: UserProfile }
  },
  {
    initialRouteName: "UserProfile",
   
  }
);

export default Drawer;