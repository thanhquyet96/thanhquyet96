<template>
  <div class="header">
    <div class="header-left">
      <a
        href="/"
        class="logo"
      >
        <img
          src="/assets/img/logo.png"
          width="35"
          height="35"
          alt=""
        > <span>Preclinic</span>
      </a>
    </div>
    <a
      id="toggle_btn"
      @click.stop="openMenu"
      href="javascript:void(0);"
    ><i class="fa fa-bars" /></a>
    <a
      id="mobile_btn"
      class="mobile_btn float-left"
      href="#sidebar"
    ><i class="fa fa-bars" /></a>
    <ul class="nav user-menu float-right">
      <li class="nav-item dropdown d-none d-sm-block">
        <a
          href="#"
          class="dropdown-toggle nav-link"
          data-toggle="dropdown"
        ><i class="fa fa-bell-o" /> <span class="badge badge-pill bg-danger float-right">3</span></a>
        <div class="dropdown-menu notifications">
          <div class="topnav-dropdown-header">
            <span>Notifications</span>
          </div>
          <div class="drop-scroll">
            <ul class="notification-list">
              <li class="notification-message">
                <a href="activities.html">
                  <div class="media">
                    <span class="avatar">
                      <img
                        alt="John Doe"
                        src="/assets/img/user.jpg"
                        class="img-fluid rounded-circle"
                      >
                    </span>
                    <div class="media-body">
                      <p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
                      <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="notification-message">
                <a href="activities.html">
                  <div class="media">
                    <span class="avatar">V</span>
                    <div class="media-body">
                      <p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name <span class="noti-title">Appointment booking with payment gateway</span></p>
                      <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="notification-message">
                <a href="activities.html">
                  <div class="media">
                    <span class="avatar">L</span>
                    <div class="media-body">
                      <p class="noti-details"><span class="noti-title">Misty Tison</span> added <span class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span> to project <span class="noti-title">Doctor available module</span></p>
                      <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="notification-message">
                <a href="activities.html">
                  <div class="media">
                    <span class="avatar">G</span>
                    <div class="media-body">
                      <p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span class="noti-title">Patient and Doctor video conferencing</span></p>
                      <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="notification-message">
                <a href="activities.html">
                  <div class="media">
                    <span class="avatar">V</span>
                    <div class="media-body">
                      <p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span class="noti-title">Private chat module</span></p>
                      <p class="noti-time"><span class="notification-time">2 days ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="topnav-dropdown-footer">
            <a href="activities.html">View all Notifications</a>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown d-none d-sm-block">
        <a
          id="open_msg_box"
          href="javascript:void(0);"
          class="hasnotifications nav-link"
        ><i class="fa fa-comment-o" /> <span class="badge badge-pill bg-danger float-right">8</span></a>
      </li>
      <li class="nav-item dropdown has-arrow">
        <a
          href="#"
          class="dropdown-toggle nav-link user-link"
          data-toggle="dropdown"
        >
          <span class="user-img"><img
                                   class="rounded-circle"
                                   src="/assets/img/user.jpg"
                                   width="40"
                                   alt="Admin"
                                 >
            <span class="status online" /></span>
          <span>Admin</span>
        </a>
        <div class="dropdown-menu">
          <a
            class="dropdown-item"
            href="profile.html"
          >My Profile</a>
          <a
            class="dropdown-item"
            href="edit-profile.html"
          >Edit Profile</a>
          <a
            class="dropdown-item"
            href="settings.html"
          >Settings</a>
          <a
            class="dropdown-item"
            href="login.html"
          >Logout</a>
        </div>
      </li>
    </ul>
    <div class="dropdown mobile-user-menu float-right">
      <a
        href="#"
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
      ><i class="fa fa-ellipsis-v" /></a>
      <div class="dropdown-menu dropdown-menu-right">
        <a
          class="dropdown-item"
          href="profile.html"
        >My Profile</a>
        <a
          class="dropdown-item"
          href="edit-profile.html"
        >Edit Profile</a>
        <a
          class="dropdown-item"
          href="settings.html"
        >Settings</a>
        <a
          class="dropdown-item"
          href="login.html"
        >Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    openMenu() {
      if($('body').hasClass('mini-sidebar')) {
				$('body').removeClass('mini-sidebar');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').addClass('mini-sidebar');
				$('.subdrop + ul').slideUp();
			}
			return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
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
} */
</style>
