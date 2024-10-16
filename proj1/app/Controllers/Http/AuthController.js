'use strict'
const User = use('App/Models/User')

class AuthController {
    async register({ request }) {
        const data = request.only(['username', 'email', 'password'])

        const user = await UserActivation.create(data)
    }

    async authenticate() {

    }

}

module.exports = AuthController
