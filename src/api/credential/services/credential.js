'use strict';

/**
 * credential service
 */

module.exports = {
    login: async (email, password) => {
        try {
            console.log(email, password);
            // fetching data
            const entries = await strapi.entityService.findMany(
                "api::user-db.user-db",
                {
                    fields: ["id", "name", "email", "password", "createdAt"],
                }
            );

            // reduce the data to the format we want to return
            let entriesReduced;
            if (entries && Array.isArray(entries)) {
                entriesReduced = entries.reduce((acc, item) => {
                    acc = acc || [];
                    if(item.email === email && item.password === password) {
                        acc.push({
                            id: item.id,
                            name: item.name || "",
                            email: item.email || "",
                            password: item.password || "",
                        });
                    }
                    return acc;
                }, []);
            }

            // return the reduced data
            return entriesReduced;
        } catch (err) {
            return err;
        }
    }
}
