let rootElem = document.querySelector(".root");

class Question {
  constructor(arr = []) {
    this.title = arr[0];
    this.options = arr[1];
    this.crtAns = [2];
  }
  isCorrect(answer) {
    return answer === this.crtAns;
  }
  getCorrectAnswer() {
    return this.crtAns;
  }
  createUI() {
    let questionLi = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = this.title;
    let ul = document.createElement("ul");
    for (let i = 1; i < 5; i++) {
      let li = document.createElement("li");
      let label = document.createElement("label");
      label.innerText = this.options[i - 1];
      let input = document.createElement("input");
      input.type = "radio";
      label.append(input);
      li.append(label);
      ul.append(li);
    }
    questionLi.append(p, ul);
    rootElem.append(questionLi);
  }
}
