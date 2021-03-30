
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