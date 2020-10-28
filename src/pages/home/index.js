import React from 'react';
import './home.scss';
import {Link} from 'react-router-dom'

function Index() {
    return (
        <section className="section-inner">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <h1 className="text-center">Welkom bij Eet-iketten</h1>
                        <p className="text-center py-3">
                            Dit is een prototype voor het team Ratje. Op deze site vind je de game, leaderboard, vriendenlijst, login pagina en chatfunctie.
                            Om te beginnen met spelen moet je inloggen dit doe je door op de groene knop rechtboven te klikken. Hier kan je inloggen met Google of met een bestaand account inloggen.
                            Wanneer je dit hebt gedaan kan je chatten met andere spelers door op <i className="fas fa-comments" /> te klikken. Verder kan je ook de game spelen door op
                          <i className="fas fa-gamepad" /> te klikken.
                        </p>
                        <Link to="/game" className="btn btn-success text-center w-25">Speel nu</Link>

                        {/* <button className="btn btn-success text-center w-25">Speel nu</button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;
