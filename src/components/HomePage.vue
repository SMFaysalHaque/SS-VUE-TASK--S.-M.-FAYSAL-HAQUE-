<template>
    <div class="home-page">
        <h1>Staff Management System</h1>
        <img src="../assets/Best-employee-management-system.jpg" alt="Best-employee-management-system">
        <h3>App Summary</h3>
        <p>
            Introducing your next Staff Management System. This is a single page application. This application can be used to maintain company staff list. Users of this app can add or remove two types of staff, employees and admins. 
        </p>
        <ul>
            <li>Used Vuex for storing staff data globally. To modify the data we commit mutations in the store.</li>
            <li>Used scoped css to style app component.</li>
            <li>Used Vue Router for routing different url paths.</li>
            <li>Used <i>props</i> to pass data from parent to child components.</li>
            <li>Created a form to add staff. Applied form validation.</li>
        </ul>
        <router-link to="/allstafflist"><button id="app-btn">View App</button></router-link>
    </div>
    
</template>

<script>
export default {
    name: 'HomePage'
}
</script>


<style scoped>
.home-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    margin: 0 auto;
}
h1{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
img{
    margin: 40px 0px;
}
h3{
    margin: 10px 0px;
}
p{
    margin: 0px 0px 10px 0px;
}
#app-btn{
    width: 180px;
    margin: 10px 0px 50px 0px;
    padding: 5px 10px;
    font-size: 19px;
    background-color: coral;
    border-style: none;
    box-shadow: 2px 2px 5px gray;
    cursor: pointer;
}
#app-btn:hover{
    color: white;
    background-color: dodgerblue;
    transition: 0.2s ease-out;
}
</style>
