function showAnswer(id, id2) {
  let className = document.getElementById(id).className;
  document.getElementById(id).className =
    className == "active" ? "hidden" : "active";

  let className2 = document.getElementById(id2).className;
  document.getElementById(id2).className =
    className2 == "questionActive" ? "question" : "questionActive";
}
