import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { AsideContent } from "../containers/aside/Aside";
import { MainContent } from "../containers/main/Main";
import { useText } from "../hooks/useText";

import './home.scss';

export function Home() {
  const { message} = useText()
  return (
    <div className="container">
      <main className="main-container">
        <Header />
        <MainContent />
        <Footer />
      </main>
      <AsideContent message={message} />
    </div>
  );
}