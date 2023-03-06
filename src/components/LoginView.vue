<template>
    <div class="main-wrapper account-wrapper">
        <div class="account-page">
            <div class="account-center">
                <div class="account-box">
                    <form action="index.html" class="form-signin">
                        <div class="account-logo">
                            <a href="index.html"><img src="assets/img/logo-dark.png" alt=""></a>
                        </div>
                        <div class="form-group">
                            <label>Tài khoản</label>
                            <input type="text" autofocus="" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" class="form-control">
                        </div>
                        <div class="form-group text-right">
                            <a href="forgot-password.html">Quên mật khẩu?</a>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-primary account-btn">Đăng nhập</button>
                        </div>
                        <div class="text-center register-link">
                            Bạn chưa có tài khoản? <a href="register.html">Đăng ký</a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
