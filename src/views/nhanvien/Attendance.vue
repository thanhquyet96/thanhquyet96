<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h4 class="page-title">
          Chấm công
        </h4>
      </div>
    </div>
    <div class="row filter-row">
      <div class="col-sm-6 col-md-3">
        <div
          class="form-group form-focus select-focus"
          style="margin-bottom: -10px;"
        >
          <h2 class="text-left">
            Xin chào, Donly
          </h2>
        </div>
        <p
          class="focus-label"
          style="text-align: left;"
        >
          Hà Nội, ngày 27/05/2023
        </p>
      </div>

      <div class="col-sm-6 col-md-3">
        <!-- <a
          href="#"
          class="btn btn-success btn-block"
        > Thực hiện chấm công </a> -->
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3">
        <b-button
          variant="success"
          style="height: 60px;"
        >
          Thực hiện chấm công
        </b-button>
        <b-button
          variant="danger"
          style="height: 60px;"
        >
          Chấm công về
        </b-button>
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
    select{
      width: 100%;
    }
  </style>