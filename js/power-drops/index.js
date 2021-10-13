function calcCost(k, machines) {
  let cost = 0;

  for (let i = 0; i < machines.length - k; i++) {
    cost += Math.abs(machine[i + 1] - machine[i]);
  }

  return cost;
}

function findMinCost(k, machines) {
  if (machines.length < k) {
    throw new Error();
  }

  if (k < 1) {
    throw new Error();
  }

  if (machines.length === k) {
    return 0;
  }

  let cost = 0;

  for (let i = 0; i < k - 1; i++) {
    cost += Math.abs(machines[i + 1] - machines[i]);
  }

  let maxSubsetCost = cost;
  let currentCost = cost;

  for (let i = 1; i < machines.length - k + 1; i++) {
    if (i > 1) {
      cost -= Math.abs(machines[i - 1] - machines[i - 2]);
    }

    const nextCost = Math.abs(machines[i + k - 1] - machines[i + k - 2]);

    cost += nextCost;
    currentCost += nextCost;
    maxSubsetCost = Math.max(cost, maxSubsetCost);
  }

  return currentCost - maxSubsetCost;
}

function showResults(k, machines) {
  const cost = calcCost(machines);
  const minCost = findMinCost(k, machines);

  console.log(`${machines}, k = ${k}, minCost = ${minCost}`);
}

showResults(3, [3, 9, 4, 2, 16]);
showResults(2, [3, 7, 1, 11, 8]);
showResults(3, [3, 2, 6, 1]);
