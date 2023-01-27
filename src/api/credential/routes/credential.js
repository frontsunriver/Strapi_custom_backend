module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/login',
     handler: 'credential.login',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
