const regions = require('./20190506132226-regions.js');

function gerRegionId(name) {
  const index = regions.getRegions().indexOf(name);
  const regionId = index > -1 ? index + 1 : 1;
  return regionId;
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Clients',
    [
      {
        managerId: 2,
        icc: 8000,
        name: 'Дониер Ака Мастер',
        itn: '',
        contactPerson: 'Дониер Ака',
        phone: '(99894)6749500',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Отделочные работы',
        // 'Основные продукты': '',
      },
      {
        managerId: 2,
        icc: 8001,
        name: 'Фарух Ака,БахтШот (IMPERIA OOO)',
        itn: '',
        contactPerson: 'Фарух ака Бахшот',
        phone: '(99890)9269392 (97)703 58 18',
        regionId: gerRegionId('Ташкент, Зенит завод'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур Лакокраска,Растворитель,НЦ',
      },
      {
        managerId: 2,
        icc: 8002,
        name: 'Александр Басеин',
        itn: '',
        contactPerson: 'Александр',
        phone: '(99893)5861754',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Частник',
        // 'Основные продукты': 9,
      },
      {
        managerId: 2,
        icc: 8003,
        name: 'Маруф Ака Zoko Stile ooo, Сагбон мебель',
        itn: '',
        contactPerson: 'Маруф Ака,Абдукадыр ака',
        phone: '99 823 55 53,  983113533',
        regionId: gerRegionId('Ташкент, Алмазарский район'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Растворитель646, Нц, Полчем',
      },
      {
        managerId: 2,
        icc: 8004,
        name: 'Рахим Хоз Маг',
        itn: '',
        contactPerson: 'Рахим Ака',
        phone: '(998)90 3249490',
        regionId: gerRegionId('Той Тепа,г Центр'),
        sphere: 'Магазин',
        // 'Основные продукты': 'Гарбид',
      },
      {
        managerId: 2,
        icc: 8005,
        name: 'Сардор Ака Той Тепа Цех (Сардор Бизнес Инвест )несколько фирм',
        itn: '',
        contactPerson: 'Сардор Ака',
        phone: '(998)90 300 56 21',
        regionId: gerRegionId('Той Тепа Корасу'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска',
      },
      {
        managerId: 2,
        icc: 8006,
        name: 'Самат Той Тепа цех',
        itn: '',
        contactPerson: 'Самат Ака',
        phone: 'Сам359 0221 Хуршид 994 12 84',
        regionId: gerRegionId('Той Тепа, Корасу'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,расиворитель',
      },
      {
        managerId: 2,
        icc: 8007,
        name: 'Сиродж Бассенин',
        itn: '',
        contactPerson: 'Сиродж Ака',
        phone: 'Сиродж 90 971 08 16',
        regionId: gerRegionId('Той Тепа'),
        sphere: 'Частник',
        // 'Основные продукты': 9,
      },
      {
        managerId: 2,
        icc: 8008,
        name: 'Саша Фурнитура',
        itn: '',
        contactPerson: 'Саша',
        phone: '99 866 79 35',
        regionId: gerRegionId('Ташкент орентир джами'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,Растворитель',
      },
      {
        managerId: 2,
        icc: 8009,
        name: 'Мирсабид Ташми Мебельный цех',
        itn: '',
        contactPerson: 'Мирсабид Ака',
        phone: '90 186 33 08',
        regionId: gerRegionId('Ташкент орентир джами'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,1',
      },
      {
        managerId: 2,
        icc: 8010,
        name: 'Достон Ака,  Бахтиер ака Северный Алмазар',
        itn: '',
        contactPerson: 'Достон Ака',
        phone: 'Б 0593 548 1777 Д 918 44 58',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска',
      },
      {
        managerId: 2,
        icc: 8011,
        name: 'Хамдам Перепродажа',
        itn: '',
        contactPerson: 'Хамдам Ака',
        phone: '97 131 01 01 97 131 01 04',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Перепродает',
        // 'Основные продукты': 'растворитель',
      },
      {
        managerId: 2,
        icc: 8012,
        name: 'Гани Ака Мебельный цех',
        itn: '',
        contactPerson: 'Гани',
        phone: '97 706 64 66',
        regionId: gerRegionId('Ташкент, чукурсай'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,Растворитель',
      },
      {
        managerId: 2,
        icc: 8013,
        name: 'BEELLEZZIO Джоволидин Ака',
        itn: '',
        contactPerson: 'Джоволидин Ака',
        phone: '5,977,315,222',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,Растворитель',
      },
      {
        managerId: 2,
        icc: 8014,
        name: 'Абдурахмон Ака Джами',
        itn: '',
        contactPerson: 'Абдурахмон',
        phone: '97 707 88 48',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,1',
      },
      {
        managerId: 2,
        icc: 8015,
        name: 'Азиз (ШОШ мебель )',
        itn: '',
        contactPerson: 'Азиз',
        phone: 946616006,
        regionId: gerRegionId('Ташкент, Эпадром орентир'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,2',
      },
      {
        managerId: 2,
        icc: 8016,
        name: 'Бобур ака,Алишер ака фергана (Viss Brend)',
        itn: 306109324,
        contactPerson: 'Бобур, Азиз, Алишер',
        phone: '90272 73 73 а 93 3737373 а 902747373',
        regionId: gerRegionId('фергана'),
        sphere: 'Оптовик',
        // 'Основные продукты': '1,нитро краски, лаки,Полчем',
      },
      {
        managerId: 2,
        icc: 8017,
        name: 'VAST CLEVER MCHJ',
        itn: 304668161,
        contactPerson: 'Ахмеджаев АА',
        phone: '90 315 17 71 2790979',
        regionId: gerRegionId('Ташкент'),
        sphere: 'Мебельное производство',
        // 'Основные продукты': 'Растворитель 646,нц, шкурка полчем',
      },
      {
        managerId: 2,
        icc: 8018,
        name: 'Саид ака бектемир мебель',
        itn: '',
        contactPerson: 'Саид Ака, Абдулазиз',
        phone: '90 315 93 39',
        regionId: gerRegionId('Ташкент,бектемир, орентир Девятка куйлюк'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,разбавитель',
      },
      {
        managerId: 2,
        icc: 8019,
        name: 'Бекзод Ака Мебельный цех рай газ',
        itn: '',
        contactPerson: 'Бекзод Ака',
        phone: '707 09 91',
        regionId: gerRegionId('Тапшкент,  рай газ улица, джами базар'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,разбавитель',
      },
      {
        managerId: 2,
        icc: 8020,
        name: 'Albatros мебель Аскар ака',
        itn: '',
        contactPerson: 'Аскар ака',
        phone: '90 915 07 57',
        regionId: gerRegionId('кушбеги улица ташкент'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,разбавитель,растворитель 646',
      },
      {
        managerId: 2,
        icc: 8021,
        name: 'Classic Mebel (Ziyo Yulduz Mebel)',
        itn: 301459581,
        contactPerson: 'Нодыр Ака, Боходыр ака,Рахим ака',
        phone: '99899 8156767 начальник 90 322 45 80',
        regionId: gerRegionId('назарбек,Ташкент'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,1,лак 218',
      },
      {
        managerId: 2,
        icc: 8022,
        name: 'Камиль Ака Мебельный цех',
        itn: '',
        contactPerson: 'Камиль',
        phone: '5,909,317,568',
        regionId: gerRegionId('ташкент'),
        sphere: 'Мебельный цех',
        // 'Основные продукты': 'Тур,Лакокраска,1,лак 219',
      },
      {
        managerId: 2,
        icc: 8023,
        name: 'Мурод Ака Сурхандарья',
        itn: '',
        contactPerson: 'Мурод Ака',
        phone: '90 267 99 41',
        regionId: gerRegionId('Сурхандарья'),
        sphere: 'Мебельный цех,Магазин',
        // 'Основные продукты': 'Порошковая краска',
      },
      {
        managerId: 2,
        icc: 8024,
        name: 'холмурод джами клиент',
        itn: '',
        contactPerson: 'Холмурод ака',
        phone: '90 187 47 66',
        regionId: gerRegionId('Ташкент,Джами бозор'),
        sphere: 'перекупщик,магазин',
        // 'Основные продукты': 'краска',
      },
      {
        managerId: 2,
        icc: 1532,
        name: 'Auto Respect Road',
        itn: 301330768,
        contactPerson: 'Нурлан Асан',
        phone: 903312225,
        regionId: gerRegionId('Ташкент'),
        sphere: 'разметка',
        // 'Основные продукты': 'раствори краска',
      },
      {
        managerId: 2,
        icc: 8025,
        name: 'Антикорчи',
        itn: '',
        contactPerson: '',
        phone: '',
        regionId: gerRegionId(''),
        sphere: '',
        // 'Основные продукты': '',
      },
      {
        managerId: 2,
        icc: 8026,
        name: 'JAMOAT ESHIKLARI',
        itn: '',
        contactPerson: 'Тахир братан',
        phone: 939932087,
        regionId: gerRegionId('самарканд'),
        sphere: 'мебельныцй цех',
        // 'Основные продукты': 'раствыор грунт 039 219',
      },
      {
        managerId: 2,
        icc: 8027,
        name: 'Зокир бухара Мебельный',
        itn: '',
        contactPerson: 'Зокир',
        phone: '91 409 04 01',
        regionId: gerRegionId('Бухара'),
        sphere: 'мебельныцй цех',
        // 'Основные продукты': 'Полчем дали раствор',
      },
      {
        managerId: 2,
        icc: 8028,
        name: 'Фарход Назарбек managerId: 2, icc 8028',
        itn: '',
        contactPerson: 'Фарход ака',
        phone: '998,977,162,675',
        regionId: gerRegionId('Ташкент Назарбек с моста бальница,санаторий'),
        sphere: 'мебельныцй цех',
        // 'Основные продукты': 'нц 218 раствуоритель',
      },
      {
        managerId: 2,
        icc: 8029,
        name: 'Дониер Назарбек (Dream Style )',
        itn: 305958955,
        contactPerson: 'Дониер',
        phone: 946475555,
        regionId: gerRegionId('Ташкент Назарбек с моста бальница'),
        sphere: 'мебельныцй цех',
        // 'Основные продукты': 'растворитель лак, полчем',
      },
      {
        managerId: 2,
        icc: 8030,
        name: 'Ровшан цех кокакнд',
        itn: '',
        contactPerson: 'ровшан',
        phone: 936490585,
        regionId: gerRegionId('Коканд'),
        sphere: 'мебельныцй цех',
        // 'Основные продукты': 'растворитель полчем нц',
      },
      {
        managerId: 2,
        icc: 8031,
        name: 'Акмаль Ака Самарканд',
        itn: '',
        contactPerson: 'Акмаль',
        phone: '933,435,006',
        regionId: gerRegionId('Самарканд'),
        sphere: 'магазин',
        // 'Основные продукты': 'раствор полчем нц',
      },
      {
        managerId: 2,
        icc: 8032,
        name: 'Дямшид Бек Изатило ака Андижан Оптаваик',
        itn: '',
        contactPerson: 'Дямшид ака, Абдуллох, Изатула',
        phone: '9,14777666 972727050 97994 9437',
        regionId: gerRegionId('Андижон'),
        sphere: 'Магазин',
        // 'Основные продукты': 'раствор нц',
      },
      {
        managerId: 2,
        icc: 8033,
        name: 'Носир Мухамад МДФ корасу',
        itn: '',
        contactPerson: 'Носир',
        phone: 903303834,
        regionId: gerRegionId('Корасу академия ташкент'),
        sphere: 'Цех мебель',
        // 'Основные продукты': 'Полчем, раствор,нц',
      },
      {
        managerId: 2,
        icc: 8034,
        name: 'Санджар Шохджохон Магазин Хорезм',
        itn: '',
        contactPerson: 'Санджар',
        phone: '91 999 2728 94 2381314',
        regionId: gerRegionId('Хорезм'),
        sphere: 'Магазин',
        // 'Основные продукты': 'полчем раствор нц',
      },
      {
        managerId: 2,
        icc: 8035,
        name: 'Бахром сергили нц',
        itn: '',
        contactPerson: 'бахром,доврон',
        phone: 974406551,
        regionId: gerRegionId('Сергили,базар'),
        sphere: 'Магазин',
        // 'Основные продукты': 'нц раствопр полчем',
      },
      {
        managerId: 2,
        icc: 8036,
        name: 'Фархад метал цех',
        itn: '',
        contactPerson: 'фархад',
        phone: '935,157,930',
        regionId: gerRegionId('Ташкент'),
        sphere: 'цех метал,частник',
        // 'Основные продукты': 'черная краска, 646',
      },
      {
        managerId: 2,
        icc: 8037,
        name: 'Корасу Мебель файз (Иброхим Ака корасу )',
        itn: '',
        contactPerson: 'Иброхим Ака',
        phone: '99 815 8415 94 415 8415',
        regionId: gerRegionId('Урта чирчик, Корасу'),
        sphere: 'Цех Мебельный, Магазин',
        // 'Основные продукты': 'НЦ, Растворитель, Полчем',
      },
    ],
    {}),

  down: queryInterface => queryInterface.bulkDelete('Clients', null, {}),
};