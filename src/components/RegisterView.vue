<template>
  <div class="main-wrapper account-wrapper">
    <div class="account-page">
      <div class="account-center">
        <div class="account-box">
          <form
            action="index.html"
            class="form-signin"
          >
            <div class="account-logo">
              <a href="index.html"><img
                src="assets/img/logo-dark.png"
                alt=""
              ></a>
            </div>
            <div class="form-group">
              <label>Họ và tên</label>
              <input
                type="text"
                autofocus=""
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label>Tài khoản</label>
              <input
                type="text"
                autofocus=""
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label>Nhập lại mật khẩu</label>
              <input
                type="password"
                class="form-control"
              >
            </div>
            <!-- <div class="form-group text-right">
                            <a href="forgot-password.html">Quên mật khẩu?</a>
                        </div> -->
            <div class="form-group text-center">
              <button
                type="submit"
                class="btn btn-primary account-btn"
              >
                Đăng ký
              </button>
            </div>
            <div class="text-center register-link">
              Bạn có tài khoản? <a href="/login">Đăng nhập</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: 'LoginView',
  props: {
    msg: String
  }
}</script>

<style scoped>
  /*  h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }*/
</style>
