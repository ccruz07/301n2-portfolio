/*Portfolio- Constructor.js*/

var openPage = "container";

function Content(lessonPlans, activities, articles) {                //Cat A/
  this.lessonPlans = lessonPlans;
  this.activities = activities;
  this.articles = articles;

  this.toHTML = function() {
      return this.lessonPlans + " " + this.activities + " " + this.articles;
  }
}

var reading = new Content('lessonPlans','ABE-LSNPLNS/ABE Lesson Plans', 'article');

function changeToPage(newPage)                      //hides Category A from user until clicked//
{
  $("#"+openPage).fadeOut();
  openPage = newPage;
  $("#"+openPage).delay(400).fadeIn();

}
$(document).ready(function() {

  //$("#selectLabel").html( reading.toHTML() );

  $("#submitPageOne").click(function() {             //click goes from home page to Category A//
    changeToPage("container2");

  });

  $("#nextPage").click(function() {                 //clikc goes from Category A to Category B//
    changeToPage("container3");
  });

  $("#ABE-LSNPLNS").change(function() {                    //ABE Lesson Plan files//
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

  $("#ESOL-LsPlnRes").change(function() {                    //Esol Lesson Plan files//
    var picked = $("#ESOL-LsPlnRes").val();
    if(picked == "Lesson Plans")
    {
        window.location.href = "./esol-LsPlnRes/esolindex.html";   //DONE- connected to html files//
    }
    else if(picked == "Activities")
    {
      window.location.href = "./esol-Activities/esolActivitiesindex.html";  //DONE-connected to html files//
    }
    else if(picked == "Articles")
    {
      window.location.href = "./esol-Articles/esolArticlesindex.html";  //DONE-connected to html files//
    }
  });

  $("#Professional-Development").change(function() {                    //Esol Lesson Plan files//
    var picked = $("#Professional-Development").val();
    if(picked == "Trainings")
    {
        window.location.href = "./ProfDevRes/trngsindex.html";   //TBA connected to html files//
    }
    else if(picked == "Conferences")
    {
      window.location.href = "./ProfDevRes/Confindex.html";  //TBA-connected to html files//
    }
    else if(picked == "Webinars")
    {
      window.location.href = "./ProfDevRes/Webinarsindex.html";  //TBA-connected to html files//
    }
  });


}); //this is the end of document ready

  //Professional-Development

  /*var openPage = "container";

  function pD(trainings,conferences,webinars) {      //Cat B-Professional Development//
    this.trainings = trainings;
    this.conferences = conferences;
    this.webinars = webniars;


    this.toHTML = function() {
        return this.trainings + " " + this.conferences + " " + this.webinars;


        }
  }*/

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
  });
