export default () => {
	return (
    <div>
    <div class="form-group">
      <span class="d-flex p-2 bg-danger text-white rounded">Hackaton</span>
    </div>

    <div class="form-group">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
            <a href="/recompenses"><img src="recompenses.png" class="rounded float-left img-fluid" alt="recompenses"/></a>
            </div>
            <div class="col-sm-4">
            </div>
            <div class="col-sm-4">
            <a href="/deroulement"><img src="deroulement.png" class="rounded float-right img-fluid" alt="deroulement"/></a>
            </div>
          </div>
        </div>
    </div>

    <div class="form-group">
      <span class="d-flex p-2 bg-danger text-white rounded">Classement</span>
    </div>

    <div class="form-group">
    <table class="table table-striped rounded table-primary">
      <thead>
        <tr>
          <th scope="col">PSEUDO</th>
          <th scope="col">SCORE</th>
          <th scope="col">EPREUVES</th>
          <th scope="col">OPTIMISATION</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jean</td>
          <td>3200</td>
          <td>3/4</td>
          <td>400</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Hugo</td>
          <td>2600</td>
          <td>3/4</td>
          <td>250</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
    </div>
  
  </div>
  	);
}