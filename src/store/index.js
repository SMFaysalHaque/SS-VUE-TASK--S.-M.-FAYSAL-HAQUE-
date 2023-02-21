import { createStore } from "vuex";

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
        'Permission': 'Read-Only',
        'E-mail': 'faysal_004@gmail.com',
        'Phone': '01786-5412897'
      },
      {
        'Name': 'Rewon',
        'Permission': 'Accounts',
        'E-mail': 'rewon_005@gmail.com',
        'Phone': '01786-5486655'
      }
    ]
  },
  mutations: {
    addStaff(state, staff) {
      if ("Designation" in staff) {
        state.employees.push(staff);
      } else {
        state.admins.push(staff);
      }
    },
    removeStaff(state, staff) {
      let indexOfRemovedStaff = -1;
      if ("Designation" in staff) {
        state.employees.forEach((employee, index) => {
          if (staff["E-mail"] === employee["E-mail"]) {
            indexOfRemovedStaff = index;
          }
        });
        state.employees.splice(indexOfRemovedStaff, 1);
      } else {
        state.admins.forEach((admin, index) => {
          if (staff["E-mail"] === admin["E-mail"]) {
            indexOfRemovedStaff = index;
          }
        });
        state.admins.splice(indexOfRemovedStaff, 1);
      }
    },
  },
});
