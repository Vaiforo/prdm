use('insurance')

db.t_insurance_type.insertMany([
  {
    type_id: 1,
    type_name: "ОСАГО",
    agent_percent: 2.5,
  },
  {
    type_id: 2,
    type_name: "КАСКО {ущерб и угон}",
    agent_percent: 6.0,
  },
  {
    type_id: 3,
    type_name: "Авто от угона",
    agent_percent: 4.5,
  },
  {
    type_id: 4,
    type_name: "ДМС {добровольное медстрахование}",
    agent_percent: 5.0,
  },
  {
    type_id: 5,
    type_name: "Страхование квартиры {имущество}",
    agent_percent: 4.0,
  },
  {
    type_id: 6,
    type_name: "Страхование дома {строение}",
    agent_percent: 4.5,
  },
  {
    type_id: 7,
    type_name: "Страхование гражданской ответственности {физ. лица}",
    agent_percent: 3.0,
  },
  {
    type_id: 8,
    type_name: "Страхование от несчастных случаев",
    agent_percent: 4.0,
  },
  {
    type_id: 10,
    type_name: "Страхование путешественников",
    agent_percent: 3.5,
  },
  {
    type_id: 11,
    type_name: "Страхование жизни",
    agent_percent: 7.0,
  },
  {
    type_id: 12,
    type_name: "Страхование ипотеки",
    agent_percent: 5.5,
  },
  {
    type_id: 13,
    type_name: "Страхование имущества бизнеса {малый бизнес}",
    agent_percent: 6.5,
  },
]);

