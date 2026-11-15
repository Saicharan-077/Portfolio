export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private elements: HTMLElement[] = [];
  private originalContent: string[] = [];

  constructor(
    target: string | HTMLElement | (string | HTMLElement)[],
    options?: { type?: string; linesClass?: string }
  ) {
    const type = options?.type || "chars,words,lines";
    const linesClass = options?.linesClass || "";

    const rawElements: HTMLElement[] = [];
    if (typeof target === "string") {
      document.querySelectorAll<HTMLElement>(target).forEach((el) => rawElements.push(el));
    } else if (Array.isArray(target)) {
      target.forEach((item) => {
        if (typeof item === "string") {
          document.querySelectorAll<HTMLElement>(item).forEach((el) => rawElements.push(el));
        } else if (item instanceof HTMLElement) {
          rawElements.push(item);
        }
      });
    } else if (target instanceof HTMLElement) {
      rawElements.push(target);
    }

    this.elements = rawElements;

    rawElements.forEach((el) => {
      this.originalContent.push(el.innerHTML);
      this.splitElement(el, type, linesClass);
    });
  }

  private splitElement(el: HTMLElement, type: string, linesClass: string) {
    const text = el.innerText;
    el.innerHTML = "";

    const needChars = type.includes("chars");

    // Split text by lines / whitespace
    const wordsRaw = text.trim().split(/\s+/);
    const wordElements: HTMLElement[] = [];

    wordsRaw.forEach((w, wIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "split-word";
      wordSpan.style.display = "inline-block";
      wordSpan.style.whiteSpace = "nowrap";

      if (needChars) {
        for (let i = 0; i < w.length; i++) {
          const charSpan = document.createElement("span");
          charSpan.className = "split-char";
          charSpan.style.display = "inline-block";
          charSpan.textContent = w[i];
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        }
      } else {
        wordSpan.textContent = w;
      }

      el.appendChild(wordSpan);
      wordElements.push(wordSpan);
      this.words.push(wordSpan);

      if (wIndex < wordsRaw.length - 1) {
        const spaceNode = document.createTextNode(" ");
        el.appendChild(spaceNode);
      }
    });

    if (linesClass) {
      const lineDiv = document.createElement("div");
      lineDiv.className = linesClass;
      lineDiv.style.display = "block";
      while (el.firstChild) {
        lineDiv.appendChild(el.firstChild);
      }
      el.appendChild(lineDiv);
      this.lines.push(lineDiv);
    } else {
      this.lines.push(el);
    }
  }

  revert() {
    this.elements.forEach((el, index) => {
      el.innerHTML = this.originalContent[index];
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default SplitText;
