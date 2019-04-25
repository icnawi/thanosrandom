function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function onLoad() {
  var displayElement = document.getElementById("view");

  var randomNumber = getCookie("thanosNumber");

  if (!randomNumber) {
    randomNumber = Math.random();
    document.cookie = "thanosNumber=" + randomNumber + "; expires=Fri, 8 May 2020 00:00:00 UTC";
  } else {
    randomNumber = Number(randomNumber);
  }

  if (randomNumber < 0.5) {
    displayElement.textContent = "You are wiped out by Thanos";
  } else {
    displayElement.textContent = "You are alive";
  }
}

function clearCookie() {
  document.cookie = "thanosNumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  location.reload();
}
