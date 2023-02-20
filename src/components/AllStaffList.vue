<template>
    <div class="container">
      <div class="header-button-area">
        <button @click="setEmployeeType()" class="header-button">Employee</button>
        <button @click="setAdminType()" class="header-button">Admin</button>
      </div>
      <div>
        <button @click="toggleForm()">{{ showForm === true ? 'Close Form' : 'New Staff Form' }}</button>
        <AddStaff v-if="showForm === true" :staffType=staffType />
      </div>
      <div :key="staff.Name" v-for="staff in staffs">
        <StaffDetails :staffInfo = staff />
      </div>
    </div>
</template>

<script>
import StaffDetails from './StaffDetails.vue';
import AddStaff from './AddStaff.vue';

export default {
  name: 'AllStaffList',
  components: {
    StaffDetails,
    AddStaff,
  },
  data(){
    return{
      staffType: '',
      staffs: [],
      showForm: false,
    }
  },
  methods: {
    setEmployeeType(){
      this.staffs = this.$store.state.employees
      this.staffType = 'employee'
      // this.setStaffs()
      console.log(this.staffs);
    },
    setAdminType(){
      this.staffs = this.$store.state.admins
      this.staffType = 'admin'
      // this.setStaffs()
      console.log(this.staffs);
    },
    toggleForm(){
      this.showForm= !this.showForm
      console.log(this.showForm);
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
