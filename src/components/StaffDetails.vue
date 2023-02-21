<template>
  <div class="container">
    <div class="staff-info">
      <h2>Name: {{ staffInfo.Name }}</h2>
      <h3 v-if="'Designation' in staffInfo">Designation: {{ staffInfo.Designation }}</h3>
      <h3 v-if="'Permission' in staffInfo">Permission: {{ staffInfo.Permission }}</h3>
      <p>E-mail: {{ staffInfo['E-mail'] }}</p>
      <p>Phone Number: {{ staffInfo.Phone }}</p>
    </div>
    <div>
      <button @click="removeStaff()" id="delete-btn">Remove Staff</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaffDetails",
  props: {
    staffInfo: Object,
  },
  methods: {
        removeStaff(){
            this.$store.commit('removeStaff', this.staffInfo)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#delete-btn{
  width: 120px;
  height: 30px;
  color: white;
  background-color: red;
  border-style: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px gray;
  cursor: pointer;
}
</style>
