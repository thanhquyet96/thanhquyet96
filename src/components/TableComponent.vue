<template>
  <div class="row">
    <div class="col-md-12">
      <b-table
        striped
        hover
        :fields="fields"
        :items="items"
      >
      <template #cell(action)>
        <router-link to="/nhanvien/detail/1" class="btn btn-primary btn-sm">Xem</router-link>
        <b-button variant="success" size="sm">Sửa</b-button>
        <b-button variant="danger" size="sm">Xóa</b-button>
      </template>
      </b-table>
    </div>
  </div>  
</template>
<script>
  export default {
    name: 'TableView',
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
      return {
        fields: [
          // A virtual column that doesn't exist in items
          { key: 'index', label: 'STT' },
          // A column that needs custom formatting
          { key: 'name', label: 'Họ và tên' },
          // A regular column
          { key: 'age', label: 'Sinh nhật' },
          // A regular column
          { key: 'a', label: 'Địa chỉ' },
          // A virtual column made up from two fields
          { key: 'nameage', label: 'Số điện thoại' },
          'action'
        ],
        items: [
          { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
          { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
          { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
          { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
        ]
      }
    },
    created() {
        if(this.options){
            this.items = this.options;
        }
    }
  }
</script>