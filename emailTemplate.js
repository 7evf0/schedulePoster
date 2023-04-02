
function returnMail(text, image, host, userPhone){

    var regex = /\+/g;
    const regexed = String(userPhone).replace(regex, "%2b");

    return `<!doctype html>
    <html>
      <head>
      <p>${text}</p>
      </head>
      <body>
        <img src="${image}" width="400" height="300">
        <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td>
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="border-radius: 2px;" bgcolor="#29ED6A">
                            <a href="${host}/accept?phone=${regexed}&username=${text}" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
                                Yes             
                            </a>
                        </td>
                        <td style="border-radius: 2px;" bgcolor="#ED2939">
                            <a href="${host}/reject?phone=${regexed}&username=${text}" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
                                No             
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </table>
      </body>
    </html>`
};

module.exports = returnMail;