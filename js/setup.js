'use strict';
var HIDDEN_CLASS = 'hidden';
var setupBlock = document.querySelector('.setup');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupSimilarList = document.querySelector('.setup-similar-list');
var NUMBER_OF_WIZARDS = 4;
var wizardsContainer = document.createDocumentFragment();

var showElement = function (element) {
  if (element.classList.contains(HIDDEN_CLASS)) {
    element.classList.remove(HIDDEN_CLASS);
  }
};

var generateRandom = function (maxAmount) {
  return Math.floor(Math.random() * maxAmount);
};

var generateWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

showElement(setupBlock);
showElement(document.querySelector('.setup-similar'));

for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  wizards[i] = {
    name: WIZARD_NAMES[generateRandom(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[generateRandom(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[generateRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[generateRandom(EYES_COLORS.length)]
  };
  wizardsContainer.appendChild(generateWizardElement(wizards[i]));
}

setupSimilarList.appendChild(wizardsContainer);
