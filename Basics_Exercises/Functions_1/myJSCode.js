//#1
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

//#2
function logConsole() {
  console.log('Always bet on JavaScript.');
}

//#3
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}

//#4
function squaredNumber(num) {
  return num ** 2;
}

//#5
//Nothing since the parentheses are missing and therefore the function will not be invoked

//#6
function compareStrings(firstString, secondString) {
  switch (true) {
    case firstString.length < secondString.length:
      return -1;
      break;
    case firstString.length > secondString.length:
      return 1;
      break;
    case firstString.length === secondString.length:
      return 0;
  }
}

console.log(compareStrings('patience', 'perseverance'));
console.log(compareStrings('patience', 'persever'));
console.log(compareStrings('patience', 'sever'));

//#7
'Captain Ruby'.replace('Ruby', 'JavaScript');

//#8
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

console.log(greet('en'));

//#9
function extractLanguage(locale) {
  return locale.split('_')[0];
}

//#10
function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

//#11
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}