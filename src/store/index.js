import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: [
      {
        'Name': 'Faysal',
        'Designation': 'Software Engineer',
        'E-mail': 'faysal@gmail.com',
        'Phone': '01786-5412897'
      },
      {
        'Name': 'Rewon',
        'Designation': 'Sr. Software Engineer',
        'E-mail': 'rewon@gmail.com',
        'Phone': '01786-5486655'
      },
      {
        'Name': 'Fahad',
        'Designation': 'Accounted',
        'E-mail': 'fahad@gmail.com',
        'Phone': '01786-5412897'
      }
    ],
    admins: [
      {
        'Name': 'Faysal',
        'Permission': ['Accounts', 'Read-Only', 'Add-Staff'],
        'E-mail': 'faysal@gmail.com',
        'Phone': '01786-5412897'
      },
      {
        'Name': 'Rewon',
        'Permission': ['Accounts', 'Add-Staff', 'Remove-Staff', 'Modify-Staff'],
        'E-mail': 'rewon@gmail.com',
        'Phone': '01786-5486655'
      }
    ]
  },
  
})
