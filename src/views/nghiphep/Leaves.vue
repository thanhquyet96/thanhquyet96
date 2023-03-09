<template>
  <div>
    <div class="row">
      <div class="col-sm-8 col-6">
        <h4 class="page-title">
          Nghỉ phép
        </h4>
      </div>
      <div class="col-sm-4 col-6 text-right m-b-30">
        <a
          href="add-leave.html"
          class="btn btn-primary btn-rounded float-right"
        ><i class="fa fa-plus" /> Thêm mới</a>
      </div>
    </div>
    <div class="row filter-row">
      <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
        <b-form-group
          label="Từ khóa:"
        >
          <b-form-input
            v-model="searchForm.keyWord"
            type="text"
            placeholder="Nhập từ khóa"
            required
          />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
        <b-form-group
          label="Loại nghỉ:"
        >
          <b-form-select
            v-model="searchForm.loaiNghi"
            :options="optionsLeaveType"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
        <b-form-group
          label="Trạng thái:"
        >
          <b-form-select
            v-model="searchForm.trangThai"
            :options="trangThais"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
        <!-- <div class="form-group form-focus">
          <label class="focus-label">Từ ngày</label>
          <div class="cal-icon">
            <input
              class="form-control floating datetimepicker"
              type="text"
            >
          </div>
        </div> -->
        <b-form-group
          label="Từ ngày:"
        >
          <datepicker :value="searchForm.startDate" />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
        <b-form-group
          label="Đến ngày:"
        >
          <datepicker :value="searchForm.endDate" />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
        <a
          href="#"
          class="btn btn-success btn-block" style="margin-top: 15px;"
        > Tìm kiếm </a>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-striped custom-table mb-0 datatable">
            <thead>
              <tr>
                <th>Nhân viên</th>
                <th>Loại nghỉ</th>
                <th>Từ ngày</th>
                <th>Đến ngày</th>
                <th>Ghi chú</th>
                <th>Người phê duyệt</th>
                <th class="text-center">
                  Trạng thái
                </th>
                <th class="text-right">
                  #
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h2><a href="#">Albina Simonis <span>Nurse</span></a></h2>
                </td>
                <td>Casual Leave</td>
                <td>8 Aug 2018</td>
                <td>8 Aug 2018</td>
                <td>2 days</td>
                <td>Family Function</td>
                <td class="text-center">
                  <div class="dropdown action-label">
                    <a
                      class="custom-badge status-purple dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Chờ duyệt
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Đã duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Từ chối</a>
                    </div>
                  </div>
                </td>
                <td class="text-right">
                  <div class="dropdown dropdown-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    ><i class="fa fa-ellipsis-v" /></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="Sửa-leave.html"
                      ><i class="fa fa-pencil m-r-5" /> Sửa</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        title="Decline"
                        data-toggle="modal"
                        data-target="#Xóa_approve"
                      ><i class="fa fa-trash-o m-r-5" /> Xóa</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h2><a>	Cristina Groves  <span>Doctor</span></a></h2>
                </td>
                <td>Medical Leave</td>
                <td>13 Jul 2018</td>
                <td>15 Jul 2018</td>
                <td>3 days</td>
                <td>Going to Vacation</td>
                <td class="text-center">
                  <div class="dropdown action-label">
                    <a
                      class="custom-badge status-green dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Đã duyệt
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Đã duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Từ chối</a>
                    </div>
                  </div>
                </td>
                <td class="text-right">
                  <div class="dropdown dropdown-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    ><i class="fa fa-ellipsis-v" /></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="Sửa-leave.html"
                      ><i class="fa fa-pencil m-r-5" /> Sửa</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        title="Decline"
                        data-toggle="modal"
                        data-target="#Xóa_approve"
                      ><i class="fa fa-trash-o m-r-5" /> Xóa</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h2><a>Mary Mericle <span>Accountant</span></a></h2>
                </td>
                <td>Casual Leave</td>
                <td>27 Jun 2018</td>
                <td>28 Jun 2018</td>
                <td>2 days</td>
                <td>Going to Native Place</td>
                <td class="text-center">
                  <div class="dropdown action-label">
                    <a
                      class="custom-badge status-green dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Đã duyệt
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Đã duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Từ chối</a>
                    </div>
                  </div>
                </td>
                <td class="text-right">
                  <div class="dropdown dropdown-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    ><i class="fa fa-ellipsis-v" /></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="Sửa-leave.html"
                      ><i class="fa fa-pencil m-r-5" /> Sửa</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        title="Decline"
                        data-toggle="modal"
                        data-target="#Xóa_approve"
                      ><i class="fa fa-trash-o m-r-5" /> Xóa</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h2><a>Haylie Feeney  <span>Laboratorist</span></a></h2>
                </td>
                <td>Casual Leave</td>
                <td>13 May 2018</td>
                <td>13 May 2018</td>
                <td>2 days</td>
                <td>Not feeling well</td>
                <td class="text-center">
                  <div class="dropdown action-label">
                    <a
                      class="custom-badge status-red dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Từ chối
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Đã duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Từ chối</a>
                    </div>
                  </div>
                </td>
                <td class="text-right">
                  <div class="dropdown dropdown-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    ><i class="fa fa-ellipsis-v" /></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="Sửa-leave.html"
                      ><i class="fa fa-pencil m-r-5" /> Sửa</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        title="Decline"
                        data-toggle="modal"
                        data-target="#Xóa_approve"
                      ><i class="fa fa-trash-o m-r-5" /> Xóa</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h2><a>Zoe Butler <span>Pharmacist</span></a></h2>
                </td>
                <td>Casual Leave</td>
                <td>31 Mar 2018</td>
                <td>31 Mar 2018</td>
                <td>2 days</td>
                <td>Birthday Function</td>
                <td class="text-center">
                  <div class="dropdown action-label">
                    <a
                      class="custom-badge status-purple dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Chờ duyệt
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Chờ duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Đã duyệt</a>
                      <a
                        class="dropdown-item"
                        href="#"
                      >Từ chối</a>
                    </div>
                  </div>
                </td>
                <td class="text-right">
                  <div class="dropdown dropdown-action">
                    <a
                      href="#"
                      class="action-icon dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    ><i class="fa fa-ellipsis-v" /></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        class="dropdown-item"
                        href="Sửa-leave.html"
                      ><i class="fa fa-pencil m-r-5" /> Sửa</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        title="Decline"
                        data-toggle="modal"
                        data-target="#Xóa_approve"
                      ><i class="fa fa-trash-o m-r-5" /> Xóa</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TableComponentVue from "@/components/TableComponent.vue"
import Datepicker from 'vuejs-datepicker';
import {en, vi} from 'vuejs-datepicker/dist/locale'

export default {
  name: 'ListView',
  components: {
    // TableComponentVue
    Datepicker
  },
  data() {
    return {
      items: [
          { index: 1, name: 'Lof van ten', sex: 'Male', age: 42 },
          { index: 2, name: 'Lof van ten', sex: 'Female', age: 36 },
          { index: 3, name: 'Rubin Kincade', sex: 'Male', age: 73 },
          { index: 4, name: 'Shirley Partridge', sex: 'Female', age: 62 }
        ],
        leaveTypeSelected: null,
        optionsLeaveType: [
           { item: 1, name: 'Nghỉ phép' },
           { item: 2, name: 'Nghỉ không lương' },
        ],
        trangThais: [
           { item: 1, name: 'Chờ duyệt' },
           { item: 2, name: 'Đã duyệt' },
           { item: 3, name: 'Từ chối' },
        ],
        searchForm: {
          keyWord: null,
          loaiNghi: null,
          trangThai: null,
        startDate: '',
endDate: ''
        },
        vi: vi
    };
  }
}
</script>
