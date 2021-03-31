import axios from "axios"

const styles = {
  form: {
    borderTop: '2px solid #373B44',
    padding: '.5rem',
    display: 'flex',
  },
}
/** 
const fetch = async () => {
  try{
    const {data: departments} = await fetch("https://api.jdoodle.com/v1/execute", {
      mode: "no-cors",
      method: "POST",
      body: {
        clientId: "e463db2adee1eed75d5839b6a3e9430f",
        clientSecret:
          "3ce3725c3a88ecd385ce9efd2048b0c11658072b9e98f9d7b8943ef3f3f247c7",
        script: 'console.log("hello world")',
        stdin: "",
        language: "nodejs",
        versionIndex: "0",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.data()))
      .catch((e) => console.log(e.message));
  }catch(err){
    console.error(err)
  }
}*/

const IDEForm = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const MY_CLIENT_ID = '9d7372c17afd320611695172df961358'
    const MY_CLIENT_SECRET = '89a0de31ae30b15e8f9300d4ec3f28336e8817662e687a1296b104e4f2f66cd0'
    var json = {
      script : "console.log('hello')",
      language: "nodejs",
      versionIndex: "1",
      stdin: "",
      clientId: MY_CLIENT_ID,
      clientSecret: MY_CLIENT_SECRET
   };

   var jsontest = {
    "clientId" : "9d7372c17afd320611695172df961358",
    "clientSecret" : "89a0de31ae30b15e8f9300d4ec3f28336e8817662e687a1296b104e4f2f66cd0"
  }

   /**  AXIOS NE MARCHE PAS, IMPOSSIBLE D'AJOUTER LE MODE no-cors
   axios.post(
    'https://api.jdoodle.com/v1/execute', {
    headers: {
        'accept': 'application/json',
        'accept-language': 'en_US',
        'content-type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    },body: {
        json : json
    }
})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
 */
    // Example POST method implementation:
  async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects*/
}

postData('https://api.jdoodle.com/v1/execute', json)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  /** MODE no-cors non implémetnable 
   * var program = {
        clientId: id,
        clientSecret:secret,
        script : "print('Hello')",
        language: "C",
        versionIndex: "4"
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });**/



    fetch('https://api.jdoodle.com/v1/credit-spent', {
      method: 'POST', // or 'PUT'
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: '{\r\n    "clientId": "9d7372c17afd320611695172df961358",\r\n    "clientSecret": "89a0de31ae30b15e8f9300d4ec3f28336e8817662e687a1296b104e4f2f66cd0"\r\n}'
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    /** FROM POSTMAN */
    var myHeaders = new Headers();
    myHeaders.append("xxxx", "xxx");

    var raw = "{\r\n    \"clientId\": \"9d7372c17afd320611695172df961358\",\r\n    \"clientSecret\": \"89a0de31ae30b15e8f9300d4ec3f28336e8817662e687a1296b104e4f2f66cd0\"\r\n}";

    var requestOptions = {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://api.jdoodle.com/v1/credit-spent", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    /** FROM POSTMAN */
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

/**
var request = require('request');

var program = {
    script : "",
    language: "php",
    versionIndex: "0",
    clientId: "YourClientID",
    clientSecret:"YourClientSecret"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
 */
