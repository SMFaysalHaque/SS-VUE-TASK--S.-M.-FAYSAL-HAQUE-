<template>
    <div class="container">
      <div class="header-button-area">
        <button @click="setEmployeeType()" class="header-button">Employee</button>
        <button @click="setAdminType()" class="header-button">Admin</button>
      </div>
      <div>
        <button>Add Staff</button>
      </div>
      <div :key="staff.Name" v-for="staff in staffs">
        <StaffDetails :staffInfo = staff />
      </div>
    </div>
</template>

<script>
import StaffDetails from './StaffDetails.vue';

export default {
  name: 'AllStaffList',
  components: {
    StaffDetails,
  },
  data(){
    return{
      staffs: [],
    }
  },
  methods: {
    setEmployeeType(){
      this.staffs = this.$store.state.employees 
      // this.setStaffs()
      console.log(this.staffs);
    },
    setAdminType(){
      this.staffs = this.$store.state.admins
      // this.setStaffs()
      console.log(this.staffs);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-button {
  width: 50%;
  height: 40px;
}
.fas {
  color: red;
}
</style>
