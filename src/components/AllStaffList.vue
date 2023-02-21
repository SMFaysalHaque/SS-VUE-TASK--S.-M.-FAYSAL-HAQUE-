<template>
  <div id="go-back-btn">
    <router-link to="/"><button id="back-btn">Go Back</button></router-link>
  </div>
  <div class="container">
    <div class="header-button-area">
        <button
          @click="setStaffType('employee')" 
          class="header-button" 
          :class="{'active': staffType === 'employee'}">
          Employee
        </button>
        <button
          @click="setStaffType('admin')"
          class="header-button" 
          :class="{'active': staffType === 'admin'}">
          Admin
        </button>
      </div>
      <p v-if="staffType === ''">Please select staff type</p>
      <div>
      <button @click="toggleForm()" v-if="staffType !== ''">
        {{ showForm === true ? "Close Form" : "New Staff Form" }}
      </button>
      <AddStaff v-if="showForm === true && staffType !== ''" :staffType="staffType" />
    </div>
    <div :key="staff['E-mail']" v-for="staff in staffs">
      <StaffDetails :staffInfo="staff" />
    </div>
  </div>
</template>

<script>
import StaffDetails from "./StaffDetails.vue";
import AddStaff from "./AddStaff.vue";

export default {
  name: "AllStaffList",
  components: {
    StaffDetails,
    AddStaff,
  },
  data() {
    return {
      staffType: "",
      staffs: [],
      showForm: false,
    };
  },
  methods: {
    setStaffType(type) {
      this.staffType = type;
      if (type === "employee") {
        this.staffs = this.$store.state.employees;
      } else {
        this.staffs = this.$store.state.admins;
      }
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  background-color: rgb(152, 152, 240);
  font-size: 17px;
}
#go-back-btn {
  max-width: 500px;
  margin: 0 auto;
}
.header-button {
  width: 50%;
  height: 40px;
}
.fas {
  color: red;
}
#back-btn {
  width: 180px;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 19px;
  background-color: coral;
  border-style: none;
  box-shadow: 2px 2px 5px gray;
  cursor: pointer;
}
#back-btn:hover {
  color: white;
  background-color: dodgerblue;
  transition: 0.2s ease-out;
}
</style>
