import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
  },
  create: {
    width: '100%',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#578c65',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#f0f0f0',
  },
  input: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#c9bcbc',
    width: '100%',
    marginBottom: 20,
  },
  photo: {
    width: '100%',
    height: 400,
    marginVertical: 20,
  },
  emptyNode: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,
    marginVertical: 20,
  },
  info: {
    borderColor: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
});