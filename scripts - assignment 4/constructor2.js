//Portfolio constructor2.js     REDESIGN//
//copy articles.js constructor function & connect to handlebars template//

var articles = [];                      //CLASS04  article.js//

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {

  var articleTemplate = $("#article-template").html();
  var compiledTemplate = Handlebars.compile(articleTemplate);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  return compiledTemplate(this);

};

rawData.sort(function(a,b) {                  //ERROR MSG: rawData not defined???//
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
})

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});































/*PARKING LOT - HOLD CODE HERE
var openPage = "container";

function Content(projects, activities, articles) {                //Cat A/
  this.projects = projects;
  this.activities = activities;
  this.articles = articles;

  this.toHTML = function() {
      return this.projects + " " + this.activities + " " + this.articles;
  }
}
//FIX THIS FUNCTION-MUST GET INFO FROM blogArticles.js//
$("#Projects").change(function() {
  var picked = $("#Projects").val();
  if(picked == "My Project")
  {
}
  else if(picked == "Activities")
  {
    window.location.href = "./Activities/index.html";        //Acitivies file//
  }
  else if(picked == "Articles")
  {
    window.location.href = "./Articles/index.html";         //Articles file//
  }
});

//IDK????-Fix this function- menu acts as tabs//
$("#mainMenu").click(function(e) {                           //Main Menu on homepage//
    if(e.target.id == "home")
    {
      changeToPage("container");
    }
    else if(e.target.id == "about")
    {
      changeToPage("containerAbout");
    }
    else if(e.target.id == "contact")
    {
      changeToPage("containerContact");
    }
});*/
