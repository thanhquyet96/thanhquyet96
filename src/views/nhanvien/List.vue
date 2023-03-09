<template>
  <div>
    <div class="row">
      <div class="col-sm-8 col-6">
        <h4 class="page-title">
          Danh sách nhân viên
        </h4>
      </div>
      <div class="col-sm-4 col-6 text-right m-b-30">
        <router-link to="/nhanvien/create" class="btn btn-primary btn-rounded float-right"><i class="fa fa-plus" /> Thêm mới nhân viên</router-link>
      </div>
    </div>
    <div class="row filter-row">
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <label class="focus-label">Từ khóa tìm kiếm</label>
          <input
            type="text"
            class="form-control floating"
          >
        </div>
      </div>
      <!-- <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <label class="focus-label">From</label>
          <div class="cal-icon">
            <input
              class="form-control floating datetimepicker"
              type="text"
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="form-group form-focus">
          <label class="focus-label">To</label>
          <div class="cal-icon">
            <input
              class="form-control floating datetimepicker"
              type="text"
            >
          </div>
        </div>
      </div> -->
      <div class="col-sm-6 col-md-3">
        <a
          href="#"
          class="btn btn-success btn-block"
        > Tìm kiếm</a>
      </div>
    </div>
    <TableComponentVue :options="items" />
  </div>
</template>

<script>
import TableComponentVue from "@/components/TableComponent.vue"

export default {
  name: 'ListView',
  components: {
    TableComponentVue
  },
  data() {
    return {
      items: [
          { index: 1, name: 'Lof van ten', sex: 'Male', age: 42 },
          { index: 2, name: 'Lof van ten', sex: 'Female', age: 36 },
          { index: 3, name: 'Rubin Kincade', sex: 'Male', age: 73 },
          { index: 4, name: 'Shirley Partridge', sex: 'Female', age: 62 }
        ]
    };
  }
}
</script>
