import Header from "./Header";

export default function Layout({ children, navigation, back }) {
  return (
    <>
      <Header back={back} navigation={navigation} />
      {children}
    </>
  );
}
