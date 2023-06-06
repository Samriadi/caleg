import React, { Component, useEffect } from "react";
import { Platform } from "react-native";
import { Appbar } from "react-native-paper";
import { css } from "../css";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/core";

const Header = ({ tittle }) => {
  return (
    <Appbar.Header style={css.header}>
      <Appbar.Content titleStyle={[css.headerTitle]} title={tittle} />
    </Appbar.Header>
  );
};
export default Header;
