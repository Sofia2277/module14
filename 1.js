const xmlString = <
    list >
    <
    student >
    <
    name lang = "en" >
    <
    first > Ivan < /first> <
    second > Ivanov < /second> <
    /name> <
    age > 35 < /age> <
    prof > teacher < /prof> <
    /student> <
    student >
    <
    name lang = "ru" >
    <
    first > Петр < /first> <
    second > Петров < /second> <
    /name> <
    age > 58 < /age> <
    prof > driver < /prof> <
    /student> <
    /list>;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const students = Array.from(xmlDoc.querySelectorAll("student")).map(student => {
    const name = $ { student.querySelector("first").textContent }
    $ { student.querySelector("second").textContent };
    const age = parseInt(student.querySelector("age").textContent);
    const prof = student.querySelector("prof").textContent;
    const lang = student.querySelector("name").getAttribute("lang");
    return { name, age, prof, lang };
});

const jsObject = { list: students };
console.log(jsObject);