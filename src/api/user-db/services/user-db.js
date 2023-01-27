'use strict';

/**
 * user-db service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-db.user-db');


// module.exports = {
//     userDb: async () => {
//         try {
//             console.log("HELLO_________________________________");
//             // fetching data
//             const entries = await strapi.entityService.findMany(
//                 "api::user-db.user-db",
//                 {
//                     fields: ["id", "name", "email", "password", "createdAt"],
//                 }
//             );

//             // reduce the data to the format we want to return
//             let entriesReduced;
//             if (entries && Array.isArray(entries)) {
//                 console.log(entries);
//                 entriesReduced = entries.reduce((acc, item) => {
//                     acc = acc || [];
//                     acc.push({
//                         id: item.id,
//                         name: item.name || "",
//                         email: item.email || "",
//                         password: item.password || "",
//                     });
//                     return acc;
//                 }, []);
//             }

//             // return the reduced data
//             return entriesReduced;
//         } catch (err) {
//             return err;
//         }
//     }
// }