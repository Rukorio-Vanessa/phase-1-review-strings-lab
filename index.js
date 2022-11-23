// Write your code in this file!
//expect(currentUser, "The 'currentUser' variable must contain a string").to.be.a('string')
const currentUser = 'Vanessa Rukorio'

//expect(welcomeMessage).to.have.string(Welcome to Flatbook,)
const welcomeMessage = "Welcome to Flatbook, " + currentUser + '!'

//expect(excitedWelcomeMessage).to.have.string('WELCOME TO FLATBOOK, ')
const excitedWelcomeMessage = welcomeMessage.toUpperCase()

//expect(shortGreeting).to.have.string('Welcome, ')
currentUser.slice(0, 1)
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`

















