var Controller = (function() {
    //EVENT LISTENERS-----------------------------------------------------------
    try {
        document.querySelector(".footer-tweets-section__tweets-div__news-grid-container").addEventListener("mouseenter", UIController.showNewsSelector);
        document.querySelector(".footer-tweets-section__tweets-div__news-grid-container").addEventListener("mouseleave", UIController.hideNewsSelector);
        menuIconBar1 = document.getElementById('menuIconBar1');
        menuIconBar2 = document.getElementById('menuIconBar2');
        menuIconBar3 = document.getElementById('menuIconBar3');
        document.getElementById('menuCheckbox').addEventListener('change', function() {
            if (this.checked) {
                UIController.openMenu();
            } else {
                UIController.closeMenu();
            }
        });
        document.getElementById("option1").addEventListener("click", () => UIController.changeSelection("option1"));
        document.getElementById("option2").addEventListener("click", () => UIController.changeSelection("option2"));
        document.getElementById("option3").addEventListener("click", () => UIController.changeSelection("option3"));
        //-----------------------------------------------------------EXPERT QUESTIONNAIRE EVENT LISTENERS-----------------------------------------------------------
        expertPrevBtn.addEventListener('click', UIController.pagenationPrevExpert);
        expertNextBtn.addEventListener('click', UIController.pagenationNextExpert);
        questionnaireExpertpage1question1.addEventListener('input', UIController.updateExpertQuestionnairePage1);
        questionnaireExpertpage1question2.addEventListener('input', UIController.updateExpertQuestionnairePage1);
        questionnaireExpertpage1question3.addEventListener('input', UIController.updateExpertQuestionnairePage1);
        questionnaireExpertpage1question4.addEventListener('input', UIController.updateExpertQuestionnairePage1);
    } catch {

    }
});
//-----------------------------------------------------------
var UIController = (function() {
    try {
        //-----------------------------------------------------------
        questionnaireScrollArrow1 = document.getElementById("questionnaireScrollArrow1");
        questionnaireScrollArrow2 = document.getElementById("questionnaireScrollArrow2");
        questionnaireScrollArrow3 = document.getElementById("questionnaireScrollArrow3");
        questionnaireScrollArrow4 = document.getElementById("questionnaireScrollArrow4");
        //-----------------------------------------------------------EXPERT QUESTIONNAIRE DOM STRINGS-----------------------------------------------------------
        var ExpertCurrentPage = 1;
        //---EXPERT PAGES---
        questionnaireExpertPage1 = document.getElementById("expertPage1");
        questionnaireExpertPage2 = document.getElementById("expertPage2");
        questionnaireExpertPage3 = document.getElementById("expertPage3");
        questionnaireExpertPage4 = document.getElementById("expertPage4");
        //---EXPERT QUESTIONS---
        //---EXPERT PAGE 1--
        questionnaireExpertpage1question1 = document.getElementById("question-1-page-1-expert");
        questionnaireExpertpage1question2 = document.getElementById("question-2-page-1-expert");
        questionnaireExpertpage1question3 = document.getElementById("question-3-page-1-expert");
        questionnaireExpertpage1question4 = document.getElementById("question-4-page-1-expert");
        //---EXPERT PAGE 2--
        questionnaireExpertpage2question1 = document.getElementById("question-1-page-2-expert");
        questionnaireExpertpage2question2 = document.getElementById("question-2-page-2-expert");
        questionnaireExpertpage2question3 = document.getElementById("question-3-page-2-expert");
        questionnaireExpertpage2question4 = document.getElementById("question-4-page-2-expert");
        //---EXPERT PAGE 3--
        questionnaireExpertpage3question1 = document.getElementById("question-1-page-3-expert");
        questionnaireExpertpage3question2 = document.getElementById("question-2-page-3-expert");
        questionnaireExpertpage3question3 = document.getElementById("question-3-page-3-expert");
        questionnaireExpertpage3question4 = document.getElementById("question-4-page-3-expert");
        //---EXPERT PAGE 4--
        questionnaireExpertpage4question1 = document.getElementById("question-1-page-4-expert");
        questionnaireExpertpage4question2 = document.getElementById("question-2-page-4-expert");
        questionnaireExpertpage4question3 = document.getElementById("question-3-page-4-expert");
        questionnaireExpertpage4question4 = document.getElementById("question-4-page-4-expert");
        //---EXPERT PROGRESS CIRCLES + ICONS---
        expertCircle1 = document.getElementById("expertCircle1");
        expertCircle2 = document.getElementById("expertCircle2");
        expertCircle3 = document.getElementById("expertCircle3");
        expertCircle4 = document.getElementById("expertCircle4");
        expertCurrentPage1Arrow = document.getElementById("expertPage1CurrentArrow");
        expertCurrentPage2Arrow = document.getElementById("expertPage2CurrentArrow");
        expertCurrentPage3Arrow = document.getElementById("expertPage3CurrentArrow");
        expertCurrentPage4Arrow = document.getElementById("expertPage4CurrentArrow");
        expertPage1InProgress = document.getElementById("expertPage1InProgress");
        expertPage2InProgress = document.getElementById("expertPage2InProgress");
        expertPage3InProgress = document.getElementById("expertPage3InProgress");
        expertPage4InProgress = document.getElementById("expertPage4InProgress");
        expertPage1Completed = document.getElementById("expertPage1Completed");
        expertPage2Completed = document.getElementById("expertPage2Completed");
        expertPage3Completed = document.getElementById("expertPage3Completed");
        expertPage4Completed = document.getElementById("expertPage4Completed");
        //---EXPERT PAGE BUTTONS---
        expertPrevBtn = document.getElementById("expertPrevBtn");
        expertNextBtn = document.getElementById("expertNextBtn");
    } catch {

    };


    return {
        //-----------------------------------------------------------
        showNav: (function() {
            window.onscroll = function() {
                if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                    document.getElementById("nav-bar").style.opacity = "100";
                    document.getElementById("nav-bar").style.pointerEvents = "all";
                } else {
                    document.getElementById("nav-bar").style.opacity = "0";
                    document.getElementById("nav-bar").style.pointerEvents = "none";
                }
            }
        }),
        //-----------------------------------------------------------
        updateNav: (function() {
            var scrollController = new ScrollMagic.Controller({
                globalSceneOptions: { duration: "100%" }
            });
            var aboutScene = new ScrollMagic.Scene({
                triggerElement: '#aboutSection'
            }).setClassToggle('#about-link', 'nav-bar__ul__nav-link__active').addTo(scrollController);
            var portfolioScene = new ScrollMagic.Scene({
                triggerElement: '#portfolioSection'
            }).setClassToggle('#portfolio-link', 'nav-bar__ul__nav-link__active').addTo(scrollController);
            var personalScene = new ScrollMagic.Scene({
                triggerElement: '#questionnaireSection'
            }).setClassToggle('#questionnaire-link', 'nav-bar__ul__nav-link__active').addTo(scrollController);
            var contactScene = new ScrollMagic.Scene({
                triggerElement: '#contactSection'
            }).setClassToggle('#contact-link', 'nav-bar__ul__nav-link__active').addTo(scrollController);
        }),
        //-----------------------------------------------------------
        moveArrowDown: (function() {
            questionnaireScrollArrow1.classList.add('move-arrow');
            questionnaireScrollArrow2.classList.add('move-arrow');
            questionnaireScrollArrow3.classList.add('move-arrow');
            questionnaireScrollArrow4.classList.add('move-arrow');
            setTimeout(function() {
                questionnaireScrollArrow1.classList.remove('move-arrow');
                questionnaireScrollArrow2.classList.remove('move-arrow');
                questionnaireScrollArrow3.classList.remove('move-arrow');
                questionnaireScrollArrow4.classList.remove('move-arrow');
            }, 500)
        }),
        //-----------------------------------------------------------
        addBodyMargin: (function() {
            const toggle = () => document.body.classList.toggle('add-margin')
            document.querySelector('#menuCheckbox').addEventListener('change', toggle);
        }),
        //-----------------------------------------------------------
        openMenu: (function() {
            document.getElementById('sideMenu').style.marginLeft = '0';
            document.body.style.marginLeft = '25%'

            menuIconBar1.classList.add("changeBar1");

            menuIconBar2.style.opacity = "0";

            menuIconBar3.classList.add("changeBar3");
        }),
        //-----------------------------------------------------------
        closeMenu: (function() {
            document.getElementById('sideMenu').style.marginLeft = '-25%';
            document.getElementById('menuArrow').style.marginLeft = '0';
            document.body.style.marginLeft = '0';

            menuIconBar1.classList.remove("changeBar1");

            menuIconBar2.style.opacity = "1";

            menuIconBar3.classList.remove("changeBar3");
        }),
        createNewsSelector: (function() {
            const newsBox = document.querySelector(".footer-tweets-section__tweets-div__news-grid-container").children;
            console.log(newsBox);
            const boxWidth = newsBox[0].offsetWidth;
            const boxHeight = newsBox[0].offsetHeight;
            const selector = document.createElement("selector");
            selector.style.position = "absolute";
            selector.style.height = boxHeight + "px";
            selector.style.width = boxWidth + "px";
            selector.style.backgroundColor = "#d3e383";
            selector.style.transition = "all .3s ease";
            selector.style.left = newsBox[0].offsetLeft + "px";
            selector.style.top = newsBox[0].offsetTop + "px";
            document.querySelector(".footer-tweets-section__tweets-div__news-grid-container").appendChild(selector)

            for (let i = 0; i < newsBox.length; i++) {
                newsBox[i].addEventListener("mouseover", function() {
                    const height = this.offsetHeight;
                    const width = this.offsetWidth;
                    const x = this.offsetLeft;
                    const y = this.offsetTop;
                    selector.style.left = x + "px";
                    selector.style.top = y + "px";
                    selector.style.width = width + "px";
                    selector.style.height = height + "px";
                    selector.style.pointerEvents = "none";

                })
            }
        }),
        showNewsSelector: (function() {
            document.querySelector("selector").style.opacity = "1";
        }),
        hideNewsSelector: (function() {
            document.querySelector("selector").style.opacity = "0";
        }),
        //-----------------------------------------------------------
        changeSelection: (function(choice) {
            var option1 = document.getElementById("option1");
            var option2 = document.getElementById("option2");
            var option3 = document.getElementById("option3");
            var option1text = document.getElementById("option1-p");
            var option2text = document.getElementById("option2-p");
            var option3text = document.getElementById("option3-p");
            var questionnaire1 = document.getElementById("questionnaire1");
            var questionnaire2 = document.getElementById("questionnaire2");
            var questionnaire3 = document.getElementById("questionnaire3");
            var selector = document.getElementById("selector");

            if (choice === "option1") {
                selector.style.left = 0;
                selector.style.width = option1.clientWidth + "px";
                option1text.classList.add('active-choice');
                option2text.classList.remove('active-choice');
                option3text.classList.remove('active-choice');
                questionnaire1.classList.add('active-questionnaire');
                questionnaire2.classList.remove('active-questionnaire');
                questionnaire3.classList.remove('active-questionnaire');
            } else if (choice === "option2") {
                selector.style.left = option1.clientWidth + "px";
                selector.style.width = option2.clientWidth + "px";
                option1text.classList.remove('active-choice');
                option2text.classList.add('active-choice');
                option3text.classList.remove('active-choice');
                questionnaire1.classList.remove('active-questionnaire');
                questionnaire2.classList.add('active-questionnaire');
                questionnaire3.classList.remove('active-questionnaire');
            } else {
                selector.style.left = option1.clientWidth + option2.clientWidth + 1 + "px";
                selector.style.width = option3.clientWidth + "px";
                option1text.classList.remove('active-choice');
                option2text.classList.remove('active-choice');
                option3text.classList.add('active-choice');
                questionnaire1.classList.remove('active-questionnaire');
                questionnaire2.classList.remove('active-questionnaire');
                questionnaire3.classList.add('active-questionnaire');
            }
        }),
        updateExpertQuestionnairePage1: (function() {
            if (questionnaireExpertpage1question1.value != '' &&
                questionnaireExpertpage1question2.value != '' &&
                questionnaireExpertpage1question3.value != '' &&
                questionnaireExpertpage1question4.value != '') {
                expertPage1InProgress.style.display = "none";
                expertPage1Completed.style.display = "flex";
                expertCircle1.style.backgroundColor = "transparent";

            } else {
                expertPage1InProgress.style.display = "flex";
                expertPage1Completed.style.display = "none";
                expertCircle1.style.backgroundColor = "#1376b1";
            }
        }),
        updateExpertQuestionnairePage2: (function() {
            if (questionnaireExpertpage2question1.value != '' &&
                questionnaireExpertpage2question2.value != '' &&
                questionnaireExpertpage2question3.value != '' &&
                questionnaireExpertpage2question4.value != '') {
                expertPage2InProgress.style.display = "none";
                expertPage2Completed.style.display = "flex";
                expertCircle1.style.backgroundColor = "transparent";

            } else {
                expertPage2InProgress.style.display = "flex";
                expertPage2Completed.style.display = "none";
                expertCircle1.style.backgroundColor = "#1376b1";
            }
        }),
        updateExpertQuestionnairePage3: (function() {
            if (questionnaireExpertpage3question1.value != '' &&
                questionnaireExpertpage3question2.value != '' &&
                questionnaireExpertpage3question3.value != '' &&
                questionnaireExpertpage3question4.value != '') {
                expertPage3InProgress.style.display = "none";
                expertPage3Completed.style.display = "flex";
                expertCircle3.style.backgroundColor = "transparent";

            } else {
                expertPage3InProgress.style.display = "flex";
                expertPage3Completed.style.display = "none";
                expertCircle3.style.backgroundColor = "#1376b1";
            }
        }),
        updateExpertQuestionnairePage2: (function() {
            if (questionnaireExpertpage4question1.value != '' &&
                questionnaireExpertpage4question2.value != '' &&
                questionnaireExpertpage4question3.value != '' &&
                questionnaireExpertpage4question4.value != '') {
                expertPage4InProgress.style.display = "none";
                expertPage4Completed.style.display = "flex";
                expertCircle4.style.backgroundColor = "transparent";

            } else {
                expertPage4InProgress.style.display = "flex";
                expertPage4Completed.style.display = "none";
                expertCircle4.style.backgroundColor = "#1376b1";
            }
        }),
        pagenationNextExpert: (function() {
            if (ExpertCurrentPage != 4) {
                ExpertCurrentPage += 1;
                if (ExpertCurrentPage === 2) {
                    questionnaireExpertPage1.classList.remove('active-page');
                    questionnaireExpertPage2.classList.add('active-page');
                } else if (ExpertCurrentPage === 3) {
                    questionnaireExpertPage2.classList.remove('active-page');
                    questionnaireExpertPage3.classList.add('active-page');
                } else if (ExpertCurrentPage === 4) {
                    questionnaireExpertPage3.classList.remove('active-page');
                    questionnaireExpertPage4.classList.add('active-page');
                } else {
                    window.alert(
                        "Unknown Error"
                    )
                }
            }
            UIController.updateCurrentExpertPageArrow();
        }),
        pagenationPrevExpert: (function() {
            if (ExpertCurrentPage != 1) {
                ExpertCurrentPage -= 1;
                if (ExpertCurrentPage === 3) {
                    questionnaireExpertPage4.classList.remove('active-page');
                    questionnaireExpertPage3.classList.add('active-page');
                } else if (ExpertCurrentPage === 2) {
                    questionnaireExpertPage3.classList.remove('active-page');
                    questionnaireExpertPage2.classList.add('active-page');
                } else if (ExpertCurrentPage === 1) {
                    questionnaireExpertPage2.classList.remove('active-page');
                    questionnaireExpertPage1.classList.add('active-page');
                } else {
                    window.alert(
                        "Unknown Error"
                    )
                }
            }
            UIController.updateCurrentExpertPageArrow();
        }),
        resetCurrentExpertPageArrow: (function() {
            expertCurrentPage1Arrow.classList.remove('active-arrow');
            expertCurrentPage2Arrow.classList.remove('active-arrow');
            expertCurrentPage3Arrow.classList.remove('active-arrow');
            expertCurrentPage4Arrow.classList.remove('active-arrow');
        }),
        updateCurrentExpertPageArrow: (function() {
            if (ExpertCurrentPage === 1) {
                UIController.resetCurrentExpertPageArrow();
                expertCurrentPage1Arrow.classList.add('active-arrow');
                expertPrevBtn.classList.add('disable-button');
            } else if (ExpertCurrentPage === 2) {
                UIController.resetCurrentExpertPageArrow();
                expertCurrentPage2Arrow.classList.add('active-arrow');
                expertPrevBtn.classList.remove('disable-button');
            } else if (ExpertCurrentPage === 3) {
                UIController.resetCurrentExpertPageArrow();
                expertCurrentPage3Arrow.classList.add('active-arrow');
                expertNextBtn.classList.remove('disable-button');
            } else if (ExpertCurrentPage === 4) {
                UIController.resetCurrentExpertPageArrow();
                expertCurrentPage4Arrow.classList.add('active-arrow');
                expertNextBtn.classList.add('disable-button');
            }
        })

    }

})();

document.addEventListener('DOMContentLoaded', (event) => {
    Controller();
    UIController.createNewsSelector();
    UIController.hideNewsSelector();
    //-----------------------------------------------------------
    try {
        UIController.updateCurrentExpertPageArrow();
        //-----------------------------------------------------------
        UIController.changeSelection("option1");
        //-----------------------------------------------------------
        document.getElementById('expertForm').reset();
        //-----------------------------------------------------------
    } catch {

    }

})