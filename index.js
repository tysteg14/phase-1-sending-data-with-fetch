function submitData(name, email) {
    const url = "http://localhost:3000/users";
  
    const userData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch(url, configurationObject)
      .then(response => response.json())
      .then(data => {
        const newId = data.id;
        const newIdElement = document.createElement("p");
        newIdElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(newIdElement);
      })
      .catch(error => {
        const errorMessageElement = document.createElement("p");
        errorMessageElement.textContent = error.message;
        document.body.appendChild(errorMessageElement);
      });
  }

