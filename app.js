const myFullName = 'Sachin Raj Charupadikkal';
const myStudentNumber = 1147316;
const TemplateLiterals = `${myFullName} - ${myStudentNumber}`
console.log(TemplateLiterals);

const headerContent = document.querySelector(`h1`);
headerContent.innerHTML = TemplateLiterals;
headerContent.classList.add('headingPrimary');