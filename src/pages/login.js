import '../css/login.css';

export default function Login() {
  return <div class="main_view_login">
    <h1 class="title_class">Account Login</h1>
    <h2 class='content_class'>If you are already a member you can login with your email address and password.</h2>
    <h2 class='title_email_class'>Email address</h2>
    <input id="enter-email-login-id" />
    <h2 class='title_password_class'>Password</h2>
    <input id="enter-password-login-id" type='password' />
    <br />
    <br />
    <br />
    <input type="checkbox" id="remember_id" value="Remember" />
    <label for="remember_id">Remember me</label>
    <br />
    <br />
    <br />
    <br />
    <button id='login_button_id'>Login Account</button>
    <br />
    <br />
    <br />
    <a>Dont have an account ? </a>
    <a href='/register' class='register_class'>Sign up here</a>
  </div>;
}