function findMinCost1(k, machines) {
  const calcCost = (machines) => {
    let cost = 0;

    for (let i = 0; i < machines.length - 1; i++) {
      cost += Math.abs(machines[i + 1] - machines[i]);
    }

    return cost;
  };

  let minCost = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < machines.length - k + 1; i++) {
    const newMachines = [
      ...machines.slice(0, i),
      ...machines.slice(i + k, machines.length),
    ];

    minCost = Math.min(minCost, calcCost(newMachines));
  }

  return minCost;
}

function findMinCost2(k, machines) {
  if (machines.length < k) {
    throw new Error();
  }

  if (k < 1) {
    throw new Error();
  }

  if (machines.length <= k + 1) {
    return 0;
  }

  let currentCost = 0;

  // Calculate the current cost
  for (let i = 0; i < machines.length - 1; i++) {
    currentCost += Math.abs(machines[i + 1] - machines[i]);
  }

  // Subtract the cost of first span
  let cost = currentCost;

  for (let i = 0; i < k; i++) {
    cost -= Math.abs(machines[i + 1] - machines[i]);
  }

  let minCost = cost;

  // Now slide the span through the array adjusting cost as we go
  for (let i = 1; i <= machines.length - k; i++) {
    if (i > 1) {
      // Remove last span delta
      cost -= Math.abs(machines[i - 1 + k] - machines[i - 2]);
      // Add previous delta
      cost += Math.abs(machines[i - 1] - machines[i - 2]);
    }

    if (i < machines.length - k) {
      // Add next span delta
      cost += Math.abs(machines[i + k] - machines[i - 1]);
      // Remove next delta
      cost -= Math.abs(machines[i + k] - machines[i + k - 1]);
    }

    minCost = Math.min(minCost, cost);
  }

  return minCost;
}

function showResults(k, machines) {
  const minCost1 = findMinCost1(k, machines);
  const minCost2 = findMinCost2(k, machines);

  console.log(
    `${machines}, k = ${k}, minCost1 = ${minCost1}, minCost2 = ${minCost2}`
  );
}

showResults(3, [3, 9, 4, 2, 16]);
showResults(2, [3, 7, 1, 11, 8]);
showResults(3, [3, 2, 6, 1]);
showResults(3, [3, 7, 1, 15, 6, 9, 22, 4, 11, 8]);
showResults(5, [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
