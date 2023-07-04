< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <title>Registration Form</title>
                <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
            <h1>Registration Form</h1>
            <p>Please fill out this form with the required information</p>
            <form method="post" action='https://register-demo.freecodecamp.org'>
                <fieldset>
                    <label for="first-name">Enter Your First Name: <input id="first-name" type="text" required /></label>
                    <label for="last-name">Enter Your Last Name: <input id="last-name" type="text" required /></label>
                    <label for="email">Enter Your Email: <input id="email" type="email" required /></label>
                    <label for="new-password">Create a New Password: <input id="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
                </fieldset>
                <fieldset>
                    <label for="personal-account"><input id="personal-account" type="radio" name="account-type" /> Personal Account</label>
                    <label for="business-account"><input id="business-account" type="radio" name="account-type" /> Business Account</label>
                    <label for="terms-and-conditions">
                        <input id="terms-and-conditions" type="checkbox" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
                    </label>
                </fieldset>
                <fieldset>
                    <label>Upload a profile picture: <input type="file" /></label>
                    <label>Input your age (years): <input type="number" min="13" max="120" /></label>

                </fieldset>
                <input type="submit" value="Submit" />
            </form>
        </body>
    </html>