import React from "react";
import { CardVideo } from "./componentes/CardVideos";
import "./styles.css";
export default function App() {
  const objeto = {
    usuario: "Niko Virtanen",
    video: "https://picsum.photos/400/400?a=1 "
  }
  const objeto2 = {
    usuario: "Christian Joudrey",
    video: "https://picsum.photos/400/400?a=2"
  }
  const objeto3 = {
    usuario: "Rosan Harmens",
    video: "https://picsum.photos/400/400?a=3"
  }
  const objeto4 = {
    usuario: "Kamesh Vedula",
    video: "https://picsum.photos/400/400?a=4"
  }
  const objeto5 = {
    usuario: "veeterzy",
    video: "https://picsum.photos/400/400?a=5"
  }
  const objeto6 = {
    usuario: "Paul Jarvis",
    video: "https://picsum.photos/400/400?a=6"
  }
  const objeto7 = {
    usuario: "Linh Nguyen",
    video: "https://picsum.photos/400/400?a=7"
  }
  const objeto8 = {
    usuario: "Andrea Boldizsar",
    video: "https://picsum.photos/400/400?a=8"
  }  
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo video={objeto.video} info={objeto.usuario}/>
            <CardVideo video={objeto2.video} info={objeto2.usuario}/>
            <CardVideo video={objeto3.video} info={objeto3.usuario}/>
            <CardVideo video={objeto4.video} info={objeto4.usuario}/>
            <CardVideo video={objeto5.video} info={objeto5.usuario}/>
            <CardVideo video={objeto6.video} info={objeto6.usuario}/>
            <CardVideo video={objeto7.video} info={objeto7.usuario}/>
            <CardVideo video={objeto8.video} info={objeto8.usuario}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
