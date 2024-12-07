import '../css/register.css';

export default function Register() {
  return <div class="main_view_register_class">
    <h1 class="title_class">Account Signup</h1>
    <h2 class='content_class'>Become a member and enjoy exclusive promotions.</h2>
    <h2 class='title_register_class'>Full Name</h2>
    <input id="enter-register-fullname-id" />
    <h2 class='title_register_class'>Email address</h2>
    <input id="enter-register-email-id" />
    <h2 class='title_register_class'>Password</h2>
    <input id="enter-register-password-id" type='password' />
    <h2 class='title_register_class'>Gender</h2>
    <select id="enter-register-gender-id">
      <option value="1">Nam</option>
      <option value="2">Nữ</option>
      <option value="3">Khác</option>
    </select>
    <h2 class='title_register_class'>Date Of Birth</h2>
    <input id="enter-register-birth-id" type='date' />
    <br />
    <br />
    <br />
    <br />
    <button id='login_button_id'>Register</button>
  </div>;
}