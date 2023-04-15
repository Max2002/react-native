import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleCard: {
    width: '100%',
    top: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(114,105,105,0.6)',
    position: 'absolute',
    zIndex: 2,
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 10,
    borderRadius: 20,
  },
});