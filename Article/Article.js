class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.expandButton');
    this.closeButton = domElement.querySelector('.closeButton');
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    this.closeButton.addEventListener('click', this.closeArticle.bind(this));
  }
  expandArticle() {
    console.log('expandArticle()', this)
    this.domElement.classList.toggle('article-open');
  }
  closeArticle() {
    this.domElement.classList.toggle('article-close')
  }
}

let articles = document.querySelectorAll('.article');
articles.forEach(domElement => new Article(domElement));
