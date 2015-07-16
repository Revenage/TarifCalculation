app.service('userData',function($rootScope){

    this.user = {
    consumersType: "1",
    lastMonth: "",
    thisMonth: "",
    kWh: "0",
    coast: "0",
    items:[
              {name: 'Телевизор',         color: "#DD0000", col: 2, time: 240,  power: 100 },
              {name: 'Стиральная машина', color: "#FF4500", col: 1, time: 10,   power: 1500},
              {name: 'Холодильник',       color: "#11325B", col: 1, time: 950, power: 700 },
              {name: 'Утюг',              color: "#006400", col: 1, time: 20,   power: 2000},
              {name: 'Электрочайник',     color: "#2a7aff", col: 1, time: 40,   power: 1000}
          ],
    months:[
            {name: 'Декабрь', value: '',},
            {name: 'Январь',   },
            {name: 'Февраль',  },
            {name: 'Март',     },
            {name: 'Апрель',   },
            {name: 'Май',      },
            {name: 'Июнь',     },
            {name: 'Июль',     },
            {name: 'Август',   },
            {name: 'Сентябрь', },
            {name: 'Октябрь',  },
            {name: 'Ноябрь',   },
            {name: 'Декабрь',  }
          ]
  };
});