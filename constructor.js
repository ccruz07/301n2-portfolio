/*Portfolio- Constructor.js*/

var openPage = "container";

function Content(lessonPlans, activities, articles) {                //activities,articles/
  this.lessonPlans = lessonPlans;
  this.activities = activities;
  this.articles = articles;

  this.toHTML = function() {
      return this.lessonPlans + " " + this.activities + " " + this.articles;
  }
}

var reading = new Content('lessonPlans','ABE-LSNPLNS/ABE Lesson Plans', 'article');

function changeToPage(newPage)
{
  $("#"+openPage).fadeOut();
  openPage = newPage;
  $("#"+openPage).delay(400).fadeIn();

}
$(document).ready(function() {

  //$("#selectLabel").html( reading.toHTML() );

  $("#submitPageOne").click(function() {
    changeToPage("container2");
  });

  $("#ABE-LSNPLNS").change(function() {
    var picked = $("#ABE-LSNPLNS").val();
    if(picked == "Lesson Plans")
    {
        window.location.href = "./ABE-LSNPLNS/index.html";
    }
    else if(picked == "Activities")
    {
      window.location.href = "./Activities/index.html";
    }
    else if(picked == "Articles")
    {
      window.location.href = "./Articles/index.html";
    }
  });

  $("#mainMenu").click(function(e) {
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
  });
});
