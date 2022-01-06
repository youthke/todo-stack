import React, { ReactFragment } from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const FinishedScreen= ({navigation}: RootTabScreenProps<"Finished">) => {
  return (
    <View style={styles.container}>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default FinishedScreen;
