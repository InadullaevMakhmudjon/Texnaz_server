'use strict';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('MyExpanses',[
    {
      id:1,
      value:23.4,
      formId:1,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:2,
      value:33.4,
      formId:2,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:3,
      value:43.4,
      formId:1,
      purposeId:2,
      typeId:3,
      personId:1,
    },
    {
      id:4,
      value:53.4,
      formId:2,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:5,
      value:63.4,
      formId:1,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:6,
      value:73.4,
      formId:2,
      purposeId:2,
      typeId:3,
      personId:1
    },
    {
      id:7,
      value:63.4,
      formId:1,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:8,
      value:43.4,
      formId:2,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:9,
      value:73.4,
      formId:1,
      purposeId:2,
      typeId:3,
      personId:1
    },
    {
      id:10,
      value:23.4,
      formId:2,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:11,
      value:53.4,
      formId:1,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:12,
      value:78.4,
      formId:2,
      purposeId:2,
      typeId:3,
      personId:1
    },
    {
      id:13,
      value:56.4,
      formId:1,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:14,
      value:36.7,
      formId:2,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:15,
      value:66.3,
      formId:1,
      purposeId:2,
      typeId:3,
      personId:1
    },
    {
      id:16,
      value:34.8,
      formId:2,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:17,
      value:26.9,
      formId:1,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:18,
      value:36.7,
      formId:2,
      purposeId:2,
      typeId:3,
      personId:1
    },
    {
      id:19,
      value:38.9,
      formId:1,
      purposeId:3,
      typeId:1,
      personId:2
    },
    {
      id:20,
      value:44.5,
      formId:2,
      purposeId:1,
      typeId:2,
      personId:3
    },
    {
      id:21,
      value:66.9,
      formId:1,
      purposeId:1,
      typeId:2,
      personId:1
    },
    {
      id:22,
      value:72.8,
      formId:1,
      purposeId:3,
      typeId:2,
      personId:3
    },
    {
      id:23,
      value:77.6,
      formId:2,
      purposeId:3,
      typeId:3,
      personId:1
    },
    {
      id:24,
      value:71.1,
      formId:1,
      purposeId:3,
      typeId:2,
      personId:2
    },
    {
      id:25,
      value:73.3,
      formId:2,
      purposeId:1,
      typeId:2,
      personId:3
    }
  ],{}),

  down:queryInterface=>queryInterface.bulkDelete('MyExpanses',null,{}),
};
