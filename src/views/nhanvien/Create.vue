<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card-box">
        <h4 class="card-title">
          Thêm mới nhân viên
        </h4>
        <form action="#">
          <div class="form-group">
            <label>Tên</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Họ và tên</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Số điện thoại</label>
            <input
              type="email"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Địa chỉ</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Sinh nhật</label>
            <input
              type="date"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Tài khoản</label>
            <input
              type="text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <label>Mật khẩu</label>
            <input
              type="text"
              class="form-control"
            >
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
    ]
    };
    }
    }
  </script>
  <style scoped>
    .form-group {
        text-align: left;
    }
  </style>