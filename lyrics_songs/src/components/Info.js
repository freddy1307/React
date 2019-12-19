import React from 'react';

function Info({info}) {
    if(Object.keys(info).length === 0) return null;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artistica
            </div>     
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Logo artista" />
                <p className="card-text">Genero: {info.strGenre}</p>
                <p className="card-text">{info.strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`https://${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>         
        </div>
    );
}

export default Info;