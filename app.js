var Controller = (function() {
    document.getElementById('menuCheckbox').addEventListener('change', function() {
        if (this.checked) {
            UIController.openMenu();
        } else {
            UIController.closeMenu();
        }
    });
    //EVENT LISTENERS-----------------------------------------------------------
    if (document.URL.includes("divorce.html")) {
        try {
            //SERVICE SELECTOR-------------------------------------------------------------------------
            diyService = document.getElementById("diy-service");
            personalService = document.getElementById("personal-service");
            consentService = document.getElementById("consent-service");
            solicitormd = document.getElementById("solicitormd-service");

            diyService.addEventListener('change', function() {
                diyService.parentElement.classList.add("active-service");
                personalService.parentElement.classList.remove("active-service");
                consentService.parentElement.classList.remove("active-service");
                solicitormd.parentElement.classList.remove("active-service");
            });

            personalService.addEventListener('change', function() {
                diyService.parentElement.classList.remove("active-service");
                personalService.parentElement.classList.add("active-service");
                consentService.parentElement.classList.remove("active-service");
                solicitormd.parentElement.classList.remove("active-service");
            });

            consentService.addEventListener('change', function() {
                diyService.parentElement.classList.remove("active-service");
                personalService.parentElement.classList.remove("active-service");
                consentService.parentElement.classList.add("active-service");
                solicitormd.parentElement.classList.remove("active-service");
            });

            solicitormd.addEventListener('change', function() {
                diyService.parentElement.classList.remove("active-service");
                personalService.parentElement.classList.remove("active-service");
                consentService.parentElement.classList.remove("active-service");
                solicitormd.parentElement.classList.add("active-service");
            });
            //Q1 QUESTION SELECTOR-------------------------------------------------------------------------
            q1Marriage = document.getElementById("q1-marriage");
            q1Civil = document.getElementById("q1-civil");
            q1Unsure = document.getElementById("q1-unsure");

            q1Marriage.addEventListener('change', function() {
                q1Marriage.parentElement.classList.add("active-answer");
                q1Civil.parentElement.classList.remove("active-answer");
                q1Unsure.parentElement.classList.remove("active-answer");
            });

            q1Civil.addEventListener('change', function() {
                q1Marriage.parentElement.classList.remove("active-answer");
                q1Civil.parentElement.classList.add("active-answer");
                q1Unsure.parentElement.classList.remove("active-answer");
            });

            q1Unsure.addEventListener('change', function() {
                q1Marriage.parentElement.classList.remove("active-answer");
                q1Civil.parentElement.classList.remove("active-answer");
                q1Unsure.parentElement.classList.add("active-answer");
            });
            //Q2 QUESTION SELECTOR-------------------------------------------------------------------------
            q2yes = document.getElementById("q2-yes");
            q2no = document.getElementById("q2-no");

            q2yes.addEventListener('change', function() {
                q2yes.parentElement.classList.add("active-answer");
                q2no.parentElement.classList.remove("active-answer");
            });

            q2no.addEventListener('change', function() {
                q2yes.parentElement.classList.remove("active-answer");
                q2no.parentElement.classList.add("active-answer");
            });
            //Q3 QUESTION SELECTOR-------------------------------------------------------------------------
            q3yes = document.getElementById("q3-yes");
            q3no = document.getElementById("q3-no");

            q3yes.addEventListener('change', function() {
                q3yes.parentElement.classList.add("active-answer");
                q3no.parentElement.classList.remove("active-answer");
            });

            q3no.addEventListener('change', function() {
                q3yes.parentElement.classList.remove("active-answer");
                q3no.parentElement.classList.add("active-answer");
            });
            //Q4 QUESTION SELECTOR-------------------------------------------------------------------------
            q4adultery = document.getElementById("q3-adultery");
            q4seperated = document.getElementById("q3-seperated");
            q4unreasonable = document.getElementById("q3-unreasonable");
            q4explain = document.getElementById("q3-explain");
            q4discuss = document.getElementById("q3-discuss");

            var question4 = document.getElementById('question4');
            var checkboxes = question4.getElementsByTagName('input');
            var checkbox;

            for (i = 0; i < checkboxes.length; ++i) {
                checkbox = checkboxes[i];
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        this.parentElement.classList.add("active-answer");
                    } else {
                        this.parentElement.classList.remove("active-answer");
                    }
                })
            }
            //Q5 QUESTION SELECTOR-------------------------------------------------------------------------
            q5yes = document.getElementById("q5-yes");
            q5no = document.getElementById("q5-no");

            q5yes.addEventListener('change', function() {
                q5yes.parentElement.classList.add("active-answer");
                q5no.parentElement.classList.remove("active-answer");
            });

            q5no.addEventListener('change', function() {
                q5yes.parentElement.classList.remove("active-answer");
                q5no.parentElement.classList.add("active-answer");
            });
            //CALL TIME CALCULATOR-------------------------------------------------------------------------
            //document.getElementById("call-time-p").style.opacity = "0";

            callDateInput = document.getElementById("input-call-date");
            callHourInput = document.getElementById("input-call-hour");
            callAMPMInput = document.getElementById("input-call-ampm");

            spanCallDay = document.getElementById("call-day");
            spanCallDate = document.getElementById("call-date");
            spanCallMonth = document.getElementById("call-month");
            spanCallTime = document.getElementById("call-time");


            callDateInput.addEventListener('change', UIController.updateCallTime);
            callHourInput.addEventListener('change', UIController.updateCallTime);
            callAMPMInput.addEventListener('change', UIController.updateCallTime);

        } catch {
            console.log("DOM error");
        }

    }
    try {
        BarristerSlide = document.getElementById('BarristerSlide');
        ConsultationSlide = document.getElementById('ConsultationSlide');
        ManagedDivorceSlide = document.getElementById('ManagedDivorceSlide');
        document.querySelector(".footer-tweets-section__tweets-div__news-grid-container").addEventListener("mouseenter", UIController.showNewsSelector);
        document.querySelector(".footer-tweets-section__tweets-div__news-grid-container").addEventListener("mouseleave", UIController.hideNewsSelector);
        menuIconBar1 = document.getElementById('menuIconBar1');
        menuIconBar2 = document.getElementById('menuIconBar2');
        menuIconBar3 = document.getElementById('menuIconBar3');

    } catch {

    }
});
//-----------------------------------------------------------
var UIController = (function() {
    var slideCounter = 0;
    var ExpertCurrentPage = 1;
    var callDate;
    var Day;
    var DateNum;
    var Month;
    var Time;

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
        changeLandingSlide: (function() {
            try {
                slideCounter += 1;
                if (slideCounter === 1) {
                    BarristerSlide.classList.remove('active-slide');
                    ConsultationSlide.classList.add('active-slide');
                    ManagedDivorceSlide.classList.remove('active-slide');
                } else if (slideCounter === 2) {
                    BarristerSlide.classList.remove('active-slide');
                    ConsultationSlide.classList.remove('active-slide');
                    ManagedDivorceSlide.classList.add('active-slide');
                } else if (slideCounter === 3) {
                    BarristerSlide.classList.add('active-slide');
                    ConsultationSlide.classList.remove('active-slide');
                    ManagedDivorceSlide.classList.remove('active-slide');
                } else if (slideCounter === 4) {
                    slideCounter = 0;
                }
            } catch {

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
        updateCallTime: (function() {

            callDate = new Date(callDateInput.value);
            Day = callDate.getDay();
            DateNum = callDate.getDate();
            Month = callDate.getMonth() + 1;


            if (Day === 1) {
                Day = "Monday";
            } else if (Day === 2) {
                Day = "Tuesday";
            } else if (Day === 3) {
                Day = "Wednesday";
            } else if (Day === 4) {
                Day = "Thursday";
            } else if (Day === 5) {
                Day = "Friday";
            } else if (Day === 6) {
                Day = "Saturday";
            } else if (Day === 0) {
                Day = "Sunday";
            } else {
                Day = "error";
            }

            function getNumberWithOrdinal(n) {
                var s = ["th", "st", "nd", "rd"],
                    v = n % 100;
                return n + (s[(v - 20) % 10] || s[v] || s[0]);
            }

            //spanCallDate.innerHTML = getNumberWithOrdinal(DateNum);

            if (Month === 1) {
                Month = "January";
            } else if (Month === 2) {
                Month = "Febuary";
            } else if (Month === 3) {
                Month = "March";
            } else if (Month === 4) {
                Month = "April";
            } else if (Month === 5) {
                Month = "May";
            } else if (Month === 6) {
                Month = "June";
            } else if (Month === 7) {
                Month = "July";
            } else if (Month === 8) {
                Month = "August";
            } else if (Month === 10) {
                Month = "September";
            } else if (Month === 11) {
                Month = "November";
            } else if (Month === 12) {
                Month = "December";
            } else {
                Month = "error";
            }

            Time = callHourInput.value + callAMPMInput.value;
            //spanCallTime.innerHTML = Time;
            document.getElementById('call-time-p').innerHTML = "We'll call you on " + Day + " " + getNumberWithOrdinal(DateNum) + " " + Month + " at " + Time;

            //document.getElementById("please-select-date-p").style.opacity = "0";
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

    try {
        setInterval(UIController.changeLandingSlide, 8000);
        UIController.createNewsSelector();
        UIController.hideNewsSelector();
    } catch {

    }


})