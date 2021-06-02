"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "tfaq",
        lastName: "rjgxc",
        email: "tfaq.rjgxc@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "vjoda",
        lastName: "feaov",
        email: "vjoda.feaov@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "ixjvce",
        lastName: "qelm",
        email: "ixjvce.qelm@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "roca",
        lastName: "hbnhj",
        email: "roca.hbnhj@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "lcgkyj",
        lastName: "lrisnbhv",
        email: "lcgkyj.lrisnbhv@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "mjmrer",
        lastName: "oqpshrtqg",
        email: "mjmrer.oqpshrtqg@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "irbbd",
        lastName: "ojkjovccs",
        email: "irbbd.ojkjovccs@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "rdnxp",
        lastName: "ckemylev",
        email: "rdnxp.ckemylev@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "bnhatg",
        lastName: "pefd",
        email: "bnhatg.pefd@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "lrie",
        lastName: "bxki",
        email: "lrie.bxki@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "yakd",
        lastName: "pigrml",
        email: "yakd.pigrml@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "dnrua",
        lastName: "ahletitbh",
        email: "dnrua.ahletitbh@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "yrree",
        lastName: "lvjvlt",
        email: "yrree.lvjvlt@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "ijpj",
        lastName: "xlqby",
        email: "ijpj.xlqby@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "tycxql",
        lastName: "yelq",
        email: "tycxql.yelq@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "obhxi",
        lastName: "vnbpsd",
        email: "obhxi.vnbpsd@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "qufk",
        lastName: "vjjos",
        email: "qufk.vjjos@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "mselkc",
        lastName: "vhxelu",
        email: "mselkc.vhxelu@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "spkq",
        lastName: "aeyxjphm",
        email: "spkq.aeyxjphm@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "spbdptx",
        lastName: "akgq",
        email: "spbdptx.akgq@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
