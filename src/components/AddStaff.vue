<template>
<div class="add-staff-area">
    <form @submit="onSubmit" class="add-form">
        <p>Name: <input type="text" v-model="name" name="" id="" placeholder="Staff Name"></p>
        <p v-if="staffType === 'employee'">Designation: <input type="text" v-model="designation" name="" id="" placeholder="Designation"></p>
        <p v-if="staffType === 'admin'">Permission: <input type="text" v-model="permission" name="" id="" placeholder="Permission"></p>
        <p>E-mail: <input type="text" v-model="email" name="" id="" placeholder="E-mail"></p>
        <p>Phone: <input type="text" v-model="phone" name="" id="" placeholder="Phone"></p>
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
    data(){
        return{
            name: '',
            designation: '',
            permission: '',
            email: '',
            phone: '',
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()

            // if(!this.text){
            //     alert('Please add a task!!!');
            //     return
            // } 
            // add validation here

            const newStaff = {
                'Name': this.name,
                'E-mail': this.email,
                'Phone': this.phone,
            }
            
            if (this.staffType === 'employee'){
                newStaff['Designation'] = this.designation;
            }
            else{
                newStaff['Permission'] = this.permission;
            }

            this.$store.commit('addStaff', newStaff)

            this.name = ''
            this.email = ''
            this.phone = ''
            this.designation = ''
            this.permission = ''
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
