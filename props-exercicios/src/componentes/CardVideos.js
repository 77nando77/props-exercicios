import React from "react";
import InfoUsuario from "./InfoUsuario";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
    return (
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.video} alt="" />
                <InfoUsuario info={props.info}/>
            </div>
        </div>
    );
}
