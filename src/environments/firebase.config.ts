import { AuthProviders, AuthMethods } from 'angularfire2';
export const firebaseConfig = {
	apiKey: "AIzaSyCojCGtg6snqP7cnWH6MT05HBxxjKRVS7Q",
	authDomain: "slack-be574.firebaseapp.com",
	databaseURL: "https://slack-be574.firebaseio.com",
	storageBucket: "slack-be574.appspot.com",
	messagingSenderId: "818841158438"
}

export const firebaseAuthConfig = {
	provider: AuthProviders.Password,
	method: AuthMethods.Password

}