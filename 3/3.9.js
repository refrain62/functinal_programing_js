// SQLライクなJavascriptを記述する
_.from(persons)
  .where(p => p.birthYear > 1900 && p.address.country !== 'US')
  .sortBy(['firstname'])
  .select(p => p.firstname)
  .value();
  // -> ['Alan', 'Barkley', 'John']
  