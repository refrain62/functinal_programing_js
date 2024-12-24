// reduceの実装
function reduce(arr, fn, accumulator) {
  let idx = -1;
  len = arr.length;

  if (!accumulator && len > 0) {
    accumulator = arr[++idx];
  }
  while (++idx < len) {
    accumulator = fn(accumulator, arr[idx], idx, arr);
  }
  return accumulator;
}


// 国別の人数を計算する
_(persons).reduce((stat, person) => {
  const country = person.address.country;
  stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
  return stat;
}, {});


// mapとreduceを組み合わせて、統計情報を計算する
const getCountry = person => person.address.country;

const gatherStats = function (stat, criteria) {
  stat[criteria] = _.isUndefined(stat[criteria]) ? 1 : stat[criteria] + 1;
  return stat;
}

_(persons).map(getCountry).reduce(gatherStats, {});

