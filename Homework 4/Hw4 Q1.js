const regexes = {
  canadianPostalCode: /^(?!.*[DFIOQU])[A-VXY]\d[A-Z] ?\d[A-Z]\d$/,
  visa: /^4\d{12}(?:\d{3})?$/,
  masterCard: /^(?:5[1-5]\d{14})|(?:2{3}1-2720\d{12})$/,
  adaFloat: /^(\d(_?\d)*#[\dA-F](_?[\dA-F])*#(E(\+|\-)\d(_?\d)*)?)|(\d(_?\d)*(\.\d(_?\d)*)?(E(\+|\-)\d(_?\d)*)?)$/,
  notThreeEndingInOO: /^________$/,
  divisibleBy64: /^________$/,
  eightThroughTwentyNine: /^________$/,
  mLComment: /^________$/,
  notDogDoorDenNoLookAround: /^________$/,
  notDogDoorDenWithLookAround: /^________$/,
}

export function matches(name, string) {
  return regexes[name].test(string)
}