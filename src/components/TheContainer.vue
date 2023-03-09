<template>
  <div>
    <the-header />
    <sidebar-component />
    <div class="page-wrapper">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarComponent from  '@/components/SidebarComponent';
import TheHeader from  '@/components/TheHeader';
export default {
  name:'App',
  components: {
    SidebarComponent,
    TheHeader
  },
  mounted(){
    // Select 2
	if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
  }
}

</script>