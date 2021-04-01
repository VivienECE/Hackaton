import { Container, Col, Row, Form } from "react-bootstrap";


export default () => {
	return (
        <div>
          <div class="form-group">
            <span class="d-flex p-2 bg-danger text-white rounded">Epreuves</span>
          </div>

          <div class="form-group">
              <div class="container">
                <div class="row">
                  <div class="col-sm-4">
                  <a href="/commentcamarche"><img src="commentcamarche.png" class="rounded float-left img-fluid" alt="Comment ça marche ?"/></a>
                  </div>
                  <div class="col-sm-4">
                  <a href="/hackaton"><img src="hackaton.png" class="rounded float-left img-fluid" alt="hackaton"/></a>
                  </div>
                  <div class="col-sm-4">
                  <a href="/conseils"><img src="conseils.png" class="rounded float-left img-fluid" alt="conseils"/></a>
                  </div>
                </div>
              </div>
          </div>

          <div class="form-group">
            <span class="d-flex p-2 bg-danger text-white rounded text-center">Classement</span>
          </div>

          <div class="form-group">
          <div class="list-group">

              <a href="/compiler" class="list-group-item list-group-item-action list-group-item-primary">Epreuve 1<button type="button" class="btn btn-danger float-right">Voir</button></a>
              <a href="/compiler" class="list-group-item list-group-item-action list-group-item-primary">Epreuve 2<button type="button" class="btn btn-danger float-right">Voir</button></a>
              <a href="/compiler" class="list-group-item list-group-item-action list-group-item-primary">Epreuve 3<button type="button" class="btn btn-danger float-right">Voir</button></a>
              <a href="/compiler" class="list-group-item list-group-item-action list-group-item-primary">Epreuve 4<button type="button" class="btn btn-danger float-right">Voir</button></a>

            </div>
          </div>
        
        </div>


        
  	);
}