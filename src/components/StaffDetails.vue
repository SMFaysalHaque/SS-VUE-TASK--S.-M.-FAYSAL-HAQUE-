<template>
  <div class="container">
    <div class="staff-info">
      <h2>Name: {{ staffInfo.Name }}</h2>
      <i class="fas fa-times"></i>
      <h3 v-if="'Designation' in staffInfo">Designation: {{ staffInfo.Designation }}</h3>
      <h3 v-if="'Permission' in staffInfo">Permission: {{ staffInfo.Permission }}</h3>
      <p>E-mail: {{ staffInfo['E-mail'] }}</p>
      <p>Phone Number: {{ staffInfo.Phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaffDetails",
  props: {
    staffInfo: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
