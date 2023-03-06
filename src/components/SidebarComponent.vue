<template>
    <div class="sidebar" id="sidebar">
              <div class="sidebar-inner slimscroll">
                  <div id="sidebar-menu" class="sidebar-menu">
                      <ul>
                          <li class="menu-title">Main</li>
                          <li>
                              <a href="/"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                          </li>
                          <li class="submenu">
                              <a href="#"><i class="fa fa-user"></i> <span> Quản lý nhân Viên </span> <span class="menu-arrow"></span></a>
                              <ul style="display: none;">
                                  <li><a href="employees.html">Danh sách</a></li>
                                  <li><a href="leaves.html">Phê duyệt</a></li>
                                  <li><a href="holidays.html">Lịch sử</a></li>
                                  <li><a href="attendance.html">Chấm công</a></li>
                                  <li><a href="attendance.html">Nghỉ phép</a></li>
                              </ul>
                          </li>
                          <li class="submenu">
                              <a href="#"><i class="fa fa-money"></i> <span> Quản lý quyền</span> <span class="menu-arrow"></span></a>
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