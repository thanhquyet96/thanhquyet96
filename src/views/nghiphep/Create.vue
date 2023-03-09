<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card-box">
        <h4 class="card-title">
          Thêm mới nghỉ phép
        </h4>
        <form action="#">
          <b-form-group
            label="Người phê duyệt:"
          >
            <b-form-select
              v-model="nguoiPheDuyet"
              :options="nguoiPheDuyets"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            />
          </b-form-group>
          <b-form-group
            label="Loại nghỉ:"
          >
            <b-form-select
              v-model="loaiNghi"
              :options="optionsLeaveType"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
            />
          </b-form-group>

          <b-form-group
            label="Ngày nghỉ:"
          >
          <datepicker :value="ngayNghi" />
          </b-form-group>
          <div class="form-group">
            <label>Lý do</label>
            <textarea
              class="form-control"
              rows="3"
            />
          </div>
          <div class="text-right">
            <button
              type="submit"
              class="btn btn-primary"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

  <script>
    import TableComponentVue from "@/components/TableComponent.vue"

    export default {
    name: 'ListView',
    components: {
    
    },
    data() {
      return {
        items: [
          { index: 1, name: 'Lof van ten', sex: 'Male', age: 42 },
          { index: 2, name: 'Lof van ten', sex: 'Female', age: 36 },
          { index: 3, name: 'Rubin Kincade', sex: 'Male', age: 73 },
          { index: 4, name: 'Shirley Partridge', sex: 'Female', age: 62 }
        ],
        nguoiPheDuyets: [
          { item: 1, name: 'Admin 1' },
          { item: 2, name: 'Admin 2' },
          { item: 3, name: 'Admin 3' },
        ],
        optionsLeaveType: [
           { item: 1, name: 'Nghỉ phép' },
           { item: 2, name: 'Nghỉ không lương' },
        ],
        nguoiPheDuyet: null,
        loaiNghi: null,
        ngayNghi: null,
      };
    }
  }
  </script>
  <style scoped>
    .form-group {
        text-align: left;
    }
  </style>