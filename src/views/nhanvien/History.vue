<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h4 class="page-title">
          Lịch sử chấm công
        </h4>
      </div>
    </div>
    <div class="row filter-row">
      <div class="col-sm-6 col-md-3">
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
      <div class="col-sm-6 col-md-3">
        <b-form-group
          label="Tháng:"
        >
          <b-form-select
            v-model="searchForm.month"
            :options="months"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3">
        <b-form-group
          label="Năm:"
        >
          <b-form-select
            v-model="searchForm.year"
            :options="years"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          />
        </b-form-group>
      </div>
      <div class="col-sm-6 col-md-3">
        <a
          href="#"
          class="btn btn-success btn-block" style="margin-top: 15px;"
        > Tìm kiếm </a>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-striped custom-table mb-0">
            <thead>
              <tr>
                <th>Nhân viên</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>22</th>
                <th>23</th>
                <th>24</th>
                <th>25</th>
                <th>26</th>
                <th>27</th>
                <th>28</th>
                <th>29</th>
                <th>30</th>
                <th>31</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Albina Simonis</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td>
                  <div class="half-day">
                    <span class="first-off"><i class="fa fa-check text-success" /></span> <span class="first-off"><i class="fa fa-close text-danger" /></span>
                  </div>
                </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td>
                  <div class="half-day">
                    <span class="first-off"><i class="fa fa-close text-danger" /></span> <span class="first-off"><i class="fa fa-check text-success" /></span>
                  </div>
                </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Cristina Groves</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Haylie Feeney</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Mary Mericle</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Zoe Butler</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Cristina Groves</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Marie Wells</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Henry Daniels</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Mark Hunter</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
              <tr>
                <td>Michael Sullivan</td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-close text-danger" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
                <td><i class="fa fa-check text-success" /> </td>
              </tr>
            </tbody>
          </table>
        </div>
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
        searchForm: {
          keyWord: null,
          month: null,
          year: null,
        },
        months:[
          { item: 1, name: 1 },
          { item: 2, name: 2 },
          { item: 3, name: 3 },
          { item: 4, name: 4 },
          { item: 5, name: 5 },
          { item: 6, name: 6 },
          { item: 7, name: 7 },
          { item: 8, name: 8 },
          { item: 9, name: 9 },
          { item: 10, name: 10 },
          { item: 11, name: 11 },
          { item: 12, name: 12},
        ],
        years: [
        { item: 2019, name: 2019},
        { item: 2020, name: 2020},
        { item: 2021, name: 2021},
        { item: 2022, name: 2022},
        { item: 2023, name: 2023},

        ]
      };
    },
    mounted() {
      // Datetimepicker
	if($('.datetimepicker').length > 0) {
		$('.datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY'
		});
	}
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