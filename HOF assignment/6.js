const linkedinProfilePattern =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

function isValidURL(url) {
  return linkedinProfilePattern.test(url);
}

let url = "https://www.linkedin.com/in/chris-do/";

if (isValidURL(url)) {
  console.log(`"${url}" is a VALID LinkedIn Profile URL.`);
} else {
  console.log(`"${url}" is NOT a Valid LinkedIn Profile URL.`);
}
