import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: [
      {
        'Name': 'Faysal',
        'Designation': 'Software Engineer',
        'E-mail': 'faysal_001@gmail.com',
        'Phone': '01786-5412897'
      },
      {
        'Name': 'Rewon',
        'Designation': 'Sr. Software Engineer',
        'E-mail': 'rewon_002@gmail.com',
        'Phone': '01786-5486655'
      },
      {
        'Name': 'Fahad',
        'Designation': 'Accounted',
        'E-mail': 'fahad_003@gmail.com',
        'Phone': '01786-5412897'
      }
    ],
    admins: [
      {
        'Name': 'Faysal',
        'Permission': ['Accounts', 'Read-Only', 'Add-Staff'],
        'E-mail': 'faysal_004@gmail.com',
        'Phone': '01786-5412897'
      },
      {
        'Name': 'Rewon',
        'Permission': ['Accounts', 'Add-Staff', 'Remove-Staff', 'Modify-Staff'],
        'E-mail': 'rewon_005@gmail.com',
        'Phone': '01786-5486655'
      }
    ]
  },
  mutations: {
    addStaff(state, staff){
      // state.counter++
      // console.log('randomNumber:', randomNumber);
      console.log(staff);
      if('Designation' in staff){
        state.employees.push(staff);
      }
      else{
        state.admins.push(staff);
      }
    },
  },
})
