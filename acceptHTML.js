
function returnAcceptHTML(host, username){

    return `<!DOCTYPE html>
    <html>
    <body>
    
    <h2>Enter The Name And Department</h2>
    <p>Enter the name and department <strong>if necessary.</strong></p>
    <p>The input is: ${username}</strong></p>
    
    <form action="${host}/accept/input.php">
      <label for="name">Total Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="dep">Department:</label><br>
      <input type="text" id="dep" name="dep"><br><br>
      <input type="submit" value="Submit">
    </form>
    
    <p>Make sure that the department is accurate!</p>
    
    </body>
    </html>`
}

module.exports = returnAcceptHTML;