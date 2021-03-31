//Envoie le code (ligne 32), mais impossible de récupérè l'ID de la compilation que renvoie l'API

const styles = {
  form: {
    borderTop: '2px solid #373B44',
    padding: '.5rem',
    display: 'flex',
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
    <form css={styles.form} onSubmit={onSubmit} >
      <h3>Code</h3>
      <textarea rows="13" cols="100" id="code" name="code" ></textarea> 
      <br/>
      <h3>Output</h3>
      <textarea disabled rows="10" cols="100" id="output" name="output" ></textarea> 
      <br/>
      <br/>
      Language : <select name="lang">
        <option value="C">C</option>
        <option value="Java">Java</option>  
        <option value="Python">Python</option> 
      </select>
      <br />
      <input  type="submit" value="Send" />
    </form>
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
