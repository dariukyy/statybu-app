function calculatePerimeter(width: number, length: number) {
  return 2 * (width + length);
}
function calculateBaseArea(width: number, length: number) {
  return width * length;
}

function calculateSideArea(width: number, length: number, height: number) {
  const heightInMeters = height / 1000; // convert mm to m
  return Math.ceil(2 * (width + length) * heightInMeters);
}

function calculateConcreteVolume(
  width: number,
  length: number,
  height: number
) {
  const heightInMeters = height / 1000; // convert mm to m
  return Number((width * length * heightInMeters).toFixed(1));
}

function calculateConcreteWeight(
  width: number,
  length: number,
  height: number
) {
  const volume = calculateConcreteVolume(width, length, height);
  const densityOfConcrete = 2350; // kg/m3 for M300 concrete
  return Number((volume * densityOfConcrete).toFixed(0));
}

function calculateSoilLoad(width: number, length: number, height: number) {
  const weight = calculateConcreteWeight(width, length, height);
  const baseArea = calculateBaseArea(width, length);
  const baseAreaInCm2 = baseArea * 10000; // convert m2 to cm2
  return Number((weight / baseAreaInCm2).toFixed(3)); // kg/cm2
}

export function calculateAll(width: number, length: number, height: number) {
  const perimeter = calculatePerimeter(width, length);
  const baseArea = calculateBaseArea(width, length);
  const sideArea = calculateSideArea(width, length, height);
  const concreteVolume = calculateConcreteVolume(width, length, height);
  const concreteWeight = calculateConcreteWeight(width, length, height);
  const soilLoad = calculateSoilLoad(width, length, height);

  return {
    perimeter,
    baseArea,
    sideArea,
    concreteVolume,
    concreteWeight,
    soilLoad,
  };
}
