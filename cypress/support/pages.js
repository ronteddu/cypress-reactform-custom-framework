// This is where all the element selectors can be stored. 
// This is very useful in maintining the selectors and should you have a need to 
// change any selector attribute or its value, its as simple as updating in this folder, 
// thereby not touching your test code.
export const personaldetails = {
    firstNameSelector: '[data-cy= "firstName"]',
    lastNameSelector: '[data-cy="lastName"]',
    emailSelector: '[data-cy="email"]',
    nextButtonSelector: '[data-cy="button-next"]'
};
export const cardform = {
    titleClassSelector: ".title"
}