<template>
  <div
    id="sidebar"
    class="sidebar"
  >
    <div class="sidebar-inner slimscroll">
      <div
        id="sidebar-menu"
        class="sidebar-menu"
      >
        <ul>
          <li class="menu-title">
            Main
          </li>
          <li>
            <router-link to="/login"><i class="fa fa-dashboard" /><span>Login</span></router-link>
          </li>
          <li>
            <router-link to="/register"><i class="fa fa-dashboard" /><span>Register</span></router-link>
          </li>
          <li>
            <a href="/"><i class="fa fa-dashboard" /> <span>Dashboard</span></a>
          </li>
          <li class="submenu">
            <a href="#"><i class="fa fa-user" /> <span> Quản lý nhân Viên </span> <span class="menu-arrow" /></a>
            <ul style="display: none;">
              <li><router-link to="/nhanvien">Danh sách</router-link></li>
              <li><router-link to="/nhanvien/history/1">Lịch sử</router-link></li>
              <li><router-link to="/nhanvien/attendance/1">Chấm công</router-link></li>
            </ul>
          </li>
          <li class="submenu">
            <a href="#"><i class="fa fa-user" /> <span> Quản lý nghỉ phép </span> <span class="menu-arrow" /></a>
            <ul style="display: none;">
              <li><router-link to="/nghiphep/list">Danh sách</router-link></li>
              <li><router-link to="/nghiphep/create">Thêm mới</router-link></li>
            </ul>
          </li>


          <li class="submenu">
            <a href="#"><i class="fa fa-money" /> <span> Quản lý quyền</span> <span class="menu-arrow" /></a>
            <ul style="display: none;">
              <li><a href="invoices.html">Danh sách</a></li>
              <li><a href="payments.html">Payments</a></li>
              <li><a href="expenses.html">Expenses</a></li>
              <li><a href="taxes.html">Taxes</a></li>
              <li><a href="provident-fund.html">Provident Fund</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted (){
    	// Small Sidebar
	// if(screen.width >= 992) {
	// 	$(document).on('click', '#toggle_btn', function() {
	// 		if($('body').hasClass('mini-sidebar')) {
	// 			$('body').removeClass('mini-sidebar');
	// 			$('.subdrop + ul').slideDown();
	// 		} else {
	// 			$('body').addClass('mini-sidebar');
	// 			$('.subdrop + ul').slideUp();
	// 		}
	// 		return false;
	// 	});
	// 	$(document).on('mouseover', function(e) {
	// 		e.stopPropagation();
	// 		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
	// 			var targ = $(e.target).closest('.sidebar').length;
	// 			if(targ) {
	// 				$('body').addClass('expand-menu');
	// 				$('.subdrop + ul').slideDown();
	// 			} else {
	// 				$('body').removeClass('expand-menu');
	// 				$('.subdrop + ul').slideUp();
	// 			}
	// 			return false;
	// 		}
	// 	});
	// }
  }
}
</script>