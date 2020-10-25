import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom'

function Index() {
  return (
    <section className="section-inner">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className="text-center">Welkom bij Eet-iketten</h1>
            <p className="text-center py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique vestibulum
              auctor. Praesent
              vitae facilisis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et
              malesuada
              fames ac ante ipsum primis in faucibus. Integer luctus est ultricies lectus volutpat malesuada.
              Proin
              sollicitudin nibh sed leo ornare, non fringilla purus volutpat. Sed placerat felis eget quam
              maximus, in
              tincidunt nisl lobortis. Maecenas interdum, diam non imperdiet laoreet, ante augue lobortis
              purus, ut tempus
              urna augue a mi. Sed tincidunt molestie diam, gravida semper urna sodales lacinia. Proin eros
              eros, dignissim
              sed dictum eget, elementum eu urna. Integer ultricies vehicula ante, ut mollis purus. In erat
              metus, venenatis
              dapibus justo id, vestibulum vestibulum enim. Praesent fringilla augue ante, sit amet cursus
              urna lobortis sit
              amet. Phasellus molestie nisi tortor, quis tincidunt nunc eleifend a. Aenean libero tortor,
              placerat vel
              tellus id, pellentesque suscipit orci. Aliquam nec ante eu purus placerat vehicula.
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
