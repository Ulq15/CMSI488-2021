## Link to GitHub Repo with JS files
[Link to Github Repo](https://github.com/Ulq1517/CMSI488-2021/blob/main/Homework%204)
## Question 1
```js
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
```
## Question 2
```js
import ohm from 'ohm-js'

const grammars = {
  canadianPostalCode: `
  PostalCodes {
    exp
    = letters digit letters space digit letters digit
      
    letters
    = ~("D" | "F" | "I" | "O" | "Q" | "U") letter
      
  }`,
  visa: `
  Visa {
	  Exp
    = "4" digit digit digit digit digit digit digit digit digit digit digit digit (digit digit digit)?
}`,
  masterCard: `
  Mastercard {
	  Exp
    = "5" &("1" | "2" | "3" | "4" | "5") digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit	--fourteen_digits
    | "2" twelve_digits digit digit digit digit digit digit digit digit digit digit digit digit --twelve_digits
    
    twelve_digits
    = &("3" | "4" | "5" | "6") digit digit digit --Numbers_2300_to_2699
    | "2" ~("0" | "1" | "2") digit --Numbers_2230_to_2299
    | "22" ~("0") digit --Numbers_2221_to_2229
    | "7" &("0" | "1") digit digit --Numbers_2700to2719
    | "720" --Number_2720

}`,
  adaFloat: `
  Numeric_literals {
	  Exp
    = decimal_literals | based_literals
    
    decimal_literals
    = numeral --A
    | numeral "." numeral --B
    | numeral exponent --C
    | numeral "." numeral exponent --D
    
    numeral
    = digit ("_"? digit)*
    
    exponent
    = "E" "+" numeral --A
    | "E" numeral --B
    | "E" "-" numeral --C
    
    based_literals
    = numeral "#" based_numeral "#" --A
    | numeral "#" based_numeral "." based_numeral "#" --B
    | numeral "#" based_numeral "#" exponent --C
    | numeral "#" based_numeral "." based_numeral "#" exponent --D
    
    based_numeral
    = extended_digit ("_"? extended_digit)*
    
    extended_digit
    = digit | "A" | "B" | "C" | "D" | "E" | "F"
}`,
  notThreeEndingInOO: `
  Strings {
    Exp
      = ~(letter "oo") ~(letter "oO") ~(letter "Oo") ~(letter "OO") letter*  --Length_three_or_less
      | letter letter letter letter+ --Length_four_or_more 

  }`,
  divisibleBy64: `
    SixtyFour {
    Exp
    = "1" + binaryDigits --Greater_than_zero
    | "0"+ --Zero
      
    binaryDigits
    = "0" binaryDigits --Additional_Zeros
    | "1" binaryDigits --Additional_Ones
    | "000000" --Done
      
  }`,
  eightThroughTwentyNine: `
  EightToTwentyNine {
    Exp
    = &("8" | "9") digit fractioned -- Eight_or_Nine
    | "1" digit fractioned --Ten_thru_NineTeen
    | "2" ~("9") digit fractioned --Twenty_thru_TwentyEight
    | "29" onlyZero	--TwentyNine_Exactly
      
    fractioned
    = "." digit+  --Fraction
    | ""	--Whole_Number
      
    onlyZero
    = "." "0"+	--Decimals
    | ""	--No_Decimals
      
  }`,
  mLComment: `
  Comments {
	  Exp
    = "(*" content "*)"
    
    content
    = letter content --Letters
    | digit content --Numbers
    | space content --Spaces
    | ""

}`,
  notDogDoorDenNoLookAround: `
  NoLookArounds {
	  Exp
    = not_D letter* --Doesnt_start_with_d
    | "d" not_EO letter* --Starts_with_d
    | "do" not_GO letter* --Starts_with_do
    | "doo" not_R letter* --Starts_with_doo
    | "de" not_N letter*  --Starts_with_de
    | letter letter? --Length_two_or_less_for_d_do_and_de
    | "doo" --doo_works
    
    not_D
    = "A".."C"
    | "E".."Z"
    | "a".."c"
    | "e".."z"
    
    not_EO
    = "A".."D"
    | "F".."N"
    | "P".."Z"
    | "a".."d"
    | "f".."n"
    | "p".."z"
    
    not_GO
    = "A".."F"
    | "H".."N"
    | "P".."Z"
    | "a".."f"
    | "h".."n"
    | "p".."z"
    
    not_R
    = "A".."Q"
    | "S".."Z"
    | "a".."q"
    | "s".."z"
    
    not_N
    = "A".."M"
    | "O".."Z"
    | "a".."m"
    | "o".."z"
    
}`,
  notDogDoorDenWithLookAround: `
  LookArounds {
	  Exp
    = ~forbidden letter* --Does_not_have_a_forbidden_word_as_a_prefix
    | "dog" letter+ --dog_is_a_prefix
    | "door" letter+ --door_is_a_prefix
    | "den" letter+ --den_is_a_prefix
    
    forbidden
    = "door"
    | "dog"
    | "den"
    
}`,
}

export function matches(name, string) {
  const grammar = `G {${grammars[name]}}`
  return ohm.grammar(grammar).match(string).succeeded()
}
```
