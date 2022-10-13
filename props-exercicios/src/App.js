import React from "react";
import { CardVideo } from "./componentes/CardVideos";
import "./styles.css";
export default function App() {
  const objeto = {
    usuario: "Luiz Kessler",
    video: "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII"
  }
  const objeto2 = {
    usuario: "Christian Joudrey",
    video: "https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc"
  }
  const objeto3 = {
    usuario: "Rosan Harmens",
    video: "https://i.picsum.photos/id/1049/3900/3120.jpg?hmac=Ox2snaSyRuEofh721sagxPbwVzLtung57FNHefB8Kdw"
  }
  const objeto4 = {
    usuario: "Kamesh Vedula",
    video: "https://i.picsum.photos/id/1079/4496/3000.jpg?hmac=G-dJcpU08vEMqjUz2rb3IxjOG99rcePqW9BF1IsPLf0"
  }
  const objeto5 = {
    usuario: "veeterzy",
    video: "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw"
  }
  const objeto6 = {
    usuario: "Paul Jarvis",
    video: "https://i.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
  }
  const objeto7 = {
    usuario: "Linh Nguyen",
    video: "https://i.picsum.photos/id/165/2000/1333.jpg?hmac=KK4nT-Drh_vgMxg3hb7rOd6peHRIYmxMg0IEyxlTVFg"
  }
  const objeto8 = {
    usuario: "Andrea Boldizsar",
    video: "https://i.picsum.photos/id/182/2896/1944.jpg?hmac=lzw4TC7qF2R3BEJu05d0M6rdglY57ugjugCP6XoiMbQ"
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
