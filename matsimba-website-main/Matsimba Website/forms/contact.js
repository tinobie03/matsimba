// Example POST method implementation:
async function postData() {
    
    let formData = $('form').serializeArray()

    url = 'http://notifications.seamless.co.zw/api/v1/notifications/email/send-email'; 
    data = {
        to: "info@seamless.co.zw",
        from: formData[1]? formData[1].value: "",
        subject: formData[2]? formData[2].value: "",
        message: "Name: " + formData[3]? formData[3].value + "... " + formData[0].value: ""   
    }

    console.log(formData, data)

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
    headers.append('Access-Control-Allow-Credentials', 'true');
  
    headers.append('GET', 'POST', 'OPTIONS');

    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: headers,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).catch((err) => {
      console.log(err);
    });

    let res = await response.json();
    let status = res.success;
    console.log(res);

    if(status){
        $('.sent-message').show();
    } else {
        $('.error-message').show();
    }
    // parses JSON response into native JavaScript objects
  }
  