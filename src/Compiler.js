//Envoie le code (ligne 32), mais impossible de récupérè l'ID de la compilation que renvoie l'API

const styles = {
  compiler: {
    'align-items': 'unset'
  },
}


const IDEForm = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    // define access parameters
    var accessToken = '72b0be4b3979aed534bbd8140a9b5383';
    var endpoint = '288d1a26.compilers.sphere-engine.com';
    
    let formData = new FormData();
      formData.append('compilerId', '56');
      formData.append('source', "Console.log('Hello')"); //CODE

    async function  postData(url = '', data = {}) {
      // Default options are marked with *
      fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: data
      }).then(async function(res) {
        const response = await new Response(res.json());
        console.log(response)
        return response
      })
    }
    
    postData('https://' + endpoint + '/api/v4/submissions?access_token=' + accessToken, formData)

      e.target.elements.output.value =  "Sortie"
    } 

  return (
    <iframe style={styles.compiler} width="200%" height="800" src="https://compilers.widgets.sphere-engine.com/lp?hash=fc30fcfc9d2ef3ae39f3950153da5253" frameborder="0"></iframe>
  )
}

  
export default () => {
	return (
  <center>
    <h1>Online IDE</h1>
       <IDEForm/>
  </center>
  	);
}
