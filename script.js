// // get references to the form and display area
// const form1 =document.getElementById('resume Form')as HTMLFormElement;
// const resumeDisplayElement=document.getElementById('resume-display') as HTMLDivElement;
var _a;
// //handle form submission
// form1.addEventListener('submit' , ( event:Event) =>{
//     event.preventDefault();
//     const name=(document.getElementById('name') as HTMLInputElement).value
//     const Email=(document.getElementById('Email') as HTMLInputElement).value
//     const phone=(document.getElementById('Phone') as HTMLInputElement).value
//     const education=(document.getElementById('education') as HTMLInputElement).value
//     const experience=(document.getElementById('experience') as HTMLInputElement).value
//     const skills=(document.getElementById('Skills') as HTMLInputElement).value
//     const resumeHTML=`
//     <h2><b>Resume</b></h2>
//     <h3>personal information</h3>
//     </p><p><b>Name:</b>${name}
//     </p><p><b>Name:</b>${Email}
//     </p><p><b>Name:</b>${phone}
//     <h3>Education</h3>
//     <p> ${education}</p>
//     <h3>Experience</h3>
//     <p> ${experience}</p>
//     <h3>skills</h3>
//     <p> ${skills}</p>
//     `;
//     //disp;lay the generated resume
//     if (resumeDisplayelement){
//         resumeDisplayelement.innerHTML=resumeHTML;
//     }else{
//         console.error('the resume display element is missing')
//     }
//})
// listing element
(_a = document.getElementById('resume Form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //create resume output
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillsElement.value;
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, " </p>\n    <p><strong>emaile:</strong> ").concat(email, " </p>\n    <p><strong>phone:</strong> ").concat(phone, " </p>\n     \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n<h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skill, "</p>");
        var resumeOutputElement = document.getElementById('resume-display');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resumeOutputElemeent is missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
