<template>
  <div class="add-staff-area">
    <form @submit="onSubmit" class="add-form">
      <p>
        Name:
        <input
          type="text"
          v-model="name"
          name=""
          id=""
          placeholder="Staff Name"
        />
      </p>
      <p v-if="staffType === 'employee'">
        Designation:
        <input
          type="text"
          v-model="designation"
          name=""
          id=""
          placeholder="Designation"
        />
      </p>
      <p v-if="staffType === 'admin'">
        Permission:
        <input
          type="text"
          v-model="permission"
          name=""
          id=""
          placeholder="Permission"
        />
      </p>
      <p>
        E-mail:
        <input type="text" v-model="email" name="" id="" placeholder="E-mail" />
      </p>
      <p>
        Phone:
        <input type="text" v-model="phone" name="" id="" placeholder="Phone" />
      </p>
      <input type="submit" value="Add Staff" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddStaff",
  props: {
    staffType: String,
  },
  data() {
    return {
      name: "",
      designation: "",
      permission: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    resetForm() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.designation = "";
      this.permission = "";
    },
    onSubmit(e) {
      e.preventDefault();
      if (!this.isValidForm()) {
        return;
      }
      const newStaff = {
        Name: this.name,
        "E-mail": this.email,
        Phone: this.phone,
      };
      if (this.staffType === "employee") {
        newStaff["Designation"] = this.designation;
      } else {
        newStaff["Permission"] = this.permission;
      }

      this.$store.commit("addStaff", newStaff);

      this.resetForm();
    },
    isValidForm() {
      const isValidTypeAttribute =
        this.staffType === "employee"
          ? this.isValidDesignation()
          : this.isValidPermission();
      return (
        this.isValidName() &&
        this.isValidEmail() &&
        this.isValidPhone() &&
        isValidTypeAttribute
      );
    },
    isValidName() {
      if (!this.name) {
        alert("Please add a name!!!");
        return false;
      }
      return true;
    },
    isValidDesignation() {
      if (!this.designation) {
        alert("Please add a designation!!!");
        return false;
      }
      return true;
    },
    isValidPermission() {
      if (!this.permission) {
        alert("Please add a permission!!!");
        return false;
      }
      return true;
    },
    isValidEmail() {
      if (!this.email) {
        alert("Please add an email!!!");
        return false;
      }
      const validEmail = String(this.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      if (!validEmail) {
        alert("Please add a valid email!!!");
        return false;
      }
      return true;
    },
    isValidPhone() {
      if (!this.phone) {
        alert("Please add an phone!!!");
        return false;
      }
      const validPhone = String(this.phone)
        .toLowerCase()
        .match(/^(?:\+88|88)?(01[3-9]\d{8})$/);
      if (!validPhone) {
        alert("Please add a valid phone!!!");
        return false;
      }
      return true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
