export const getEnglishDynamicText = (source, dynamicText) => {
    var returnText = ""
    switch (source) {
        case "EarlyBirdDialog":
            returnText = `If you apply before ${dynamicText[0].split("T")[0]} you will be charged ${dynamicText[1]}L.E instead of ${dynamicText[2]}L.E`
            break
        case "SuccessPage":
            returnText = `Thank you ${dynamicText[0]} for applying to the ${dynamicText[1]} course , we look forward for having you on board. One of our team will be contacting you soon.`
            break
        case "PromoSuccess":
            returnText = `Congrats! You just received a ${dynamicText[0]}% discount off the original price (${dynamicText[1]} L.E/Session)`
            break
        case "ReviewPara":
            returnText = `Thank You for participating in our <b>${dynamicText[0]}</b> course, we hope you enjoyed your journey with us until now.`
            break
        case "SuccessPageReview":
            returnText = `Thank you ${dynamicText[0]} for reviewing the ${dynamicText[1]} course, hope you enjoyed your journey with us until now. `
            break    
        case "PricingCard":
            returnText = `save ${dynamicText[0]}%`
            break        
        default: break
    }
    return returnText

}
export const english = {
    navBar: {
        firstBtn: "Our Courses",
        secondBtn: "About Us",
        thirdBtn: "Become an instructor",
        fourthBtn: "Contact Us"
    },
    landingPage: {
        landingPageMainText: "Live online programming courses in Arabic",
        landingPageSubTitle: "Want to know what makes our live courses special?",
        landingPageSearchPH: "What do you want to learn today?",
        checks:{
            firstTop:"Attendnace from",
            firstBottom:"Anywhere",
            secondTop:"Instant in session",
            secondBottom:"Support",
            thirdTop:"At home",
            thirdBottom:"Tasks",
            fourthTop:"Project based",
            fourthBottom:"Learning",
        },
        landingCourseBtn:"Check our courses",
        whyChooseUs: {
            title: "Why Choose Us?",
            firstPart: { title: "All courses are online", discription: "Attend the course from anywhere, all you need is your Laptop."},
            secondPart: { title: "Live with the instructor", discription: "No more having unanswered questions, the intructor is right there to help you." },
            thirdPart: { title: "Handpicked Instructors", discription: "All our instructors go through a demanding filtering process ,to ensure you get the best possible quality." },
            fourthPart: { title: "First session is FREE", discription: "Pay only when you know the course is right for you." }
        },
        howWeOperate: {
            title: "How We Operate?",
            firstPart: { title: "Search for your course", discription: "Find the course that fits your needs." },
            secondPart: { title: "Apply to the course", discription: "Apply to one of our course. Paying ZERO money upfront." },
            thirdPart: { title: "Get contacted", discription: "Once the course is set up and ready to start you will get contacted with all the details." },
            fourthPart: { title: "Get Started", discription: "Attend your first session" }
        },
        ourNumbers: {
            Title: "Our Numbers",
            firstTitle: "Students graduated",
            secondTitle: "Number of rounds",
            thirdTitle: "Number of courses"
        },
        courseSection: {
            title: "Our Courses",
            courseBtn: "More details",
            courseCommingSoonBtn: "I'm Interested"
        },
        jobSection: "Want to become an instructor?",
        jobSectionBtn: "Apply Now"

    },

    aboutUsPage: {
        pageTitle: "About Us",
        firstTitle: "Our Story",
        secondTitle: "What We Do",
        thirdTitle: "Our Team",
        ourStory: {
            firstSection: "Sometimes finding the right course for you might be a harder task than sitting through the course itself . What If this course is not right for me? What if I can't understand from the instructor? What if I end up paying a lot at first but benefit nothing later? These are the problems that Courzerve was built to solve.",
            secondSection: "We aspire to make you familiar with everything about your course before it even starts. By offering trailers and section previews for all our courses.",
            thirdSection: "Our mission is to offer a platform that can always be associated with quality, passion, and consistency. That's why we take pride in how strict our recruitment strategy is for our instructors.",
            fourthSection: "Learn. Try. Apply. Is arguably the most efficient way of acquiring a new skill. The first step is learning about the new concept, then trying it out practically through session tasks, but nothing will stick unless we apply what has been learned with real life project. That is how we do it at Courzerve."
        },
        whatWeDo: {
            firstPart: { title: "Handpick our instructors", discription: "We stress over making sure our instructors are of a high standard." },
            secondPart: { title: "Live with the instructor", discription: "No more having unanswered questions, the intructor is right there to help you." },
            thirdPart: { title: "All courses are online", discription: "Attend the course from anywhere, all you need is your laptop." },
            fourthPart: { title: "First session is FREE", discription: "Pay only when you know the course is right for you." }
        }
    },

    instructorJobsPage: {
        pageTitle: "Instructor Jobs",
        firstTitle: "Our Values",
        secondTitle: "Open Positions",
        ourValues: {
            firstPart: { title: "You are a partner", discription: "We will go through this journey together." },
            secondPart: { title: "We value talent above all", discription: "Yes experience is irreplaceable,but the talent and passion for teaching is our top priority" },
            thirdPart: { title: "Flexible working hours", discription: "Your working hours will be set upon agreement" },
            fourthPart: { title: "We handle all operations", discription: "All the marketing, expense management, and student applications are on us. You do the teaching." }
        },
        jobDialog: {
            title: "Job Application",
            subTitle: "Please complete the form below to apply for an instructor position with us.",
            name: "Name",
            email: "Email",
            phoneNumber: "Phone number",
            resume: "Resume (C.V)",
            extraInfo: "Tell us more about your self"
        },
        jobCard: {
            firstPart: "Responsibilities",
            secondPart: "Requirements"
        }
    },

    contactUsPage: {
        pageTitle: "Contact Us",
        firstTitle: "Leave a message",
        secondTitle: "Contact Details",
        messageSection: {
            firstPH: "Your Name",
            secondPH: "Your Email",
            thirdPH: "Your Message",
            submitBtn: "Submit"
        },
        ContactDetails: {
            discription: "If you have any questions, inquiries, or even concerns, please let us know and we will be glad to help.",
            phoneNumber: "01011843841",
            email: "dev@courzerve.com"
        }
    },

    coursePage: {
        firstTitle: "Why you should take this course",
        firstTitle2: "Why to take this course",
        firstTitleNav: "Why this course?",
        secondTitle: "When and Where",
        secondTitleNav: "When & Where",
        WhenWhereSubTitle: "Time and platform will be available soon",
        thirdTitle: "Content",
        fourthTitle: "Requirements",
        fifthTitle: "Description",
        sixthTitle: "Faq",
        faqSubTitle: `We are here to help. If you run into any problems at all, feel free to contact us, and we'd love to contact personally about how we can help.`,
        reviewSection: {
            title: "Reviews",
            firstSubTitle: "Average Rating",
            secondSubTitle: "Detailed Rating",
            innerTitle: "reviews"
        },
        whenAndWhere: {
            firstTitle: "Course will start on",
            secondTitle: "Course will take place on",
            thirdTitle: "Course Timings"
        },
        ApplySectionTitles: {
            firstTitle: "EarlyBird price",
            secondTitle: "Course Fee",
            timingTitle: "Start date",
            thirdTitle: "No. Of Sessions",
            thirdTitle2:"Sessions",
            thirdTitle3: "Sessions",
            fourthTitle: "Duration",
            fifthTitle: "Skill Level",
            PaymentTitle: "Payment",
            sixthTitle: "The course already has an active round, apply now and we will to contact you once the next round starts*",
            seventhTitle: "First Session is FREE",
            ApplySectionInstructorBtn: "Go to instructor",
            pricing: "Please note that",
            dropDownValues: ["Facebook", "Youtube", "Google", "Friend", "Took a course with Courzerve before", "Other"]
        },
        applyBtn: "Register Now",
        applyDialog: {
            title: "Course Application",
            subTitle: "Please complete the form below to apply for this course.",
            personalInfo: {
                title: "Personal Info",
                name: "Full name",
                age: "Age",
                phoneNumber: "Phone number",
                email: "E-mail",
                extraInfo: "Where did you hear about us?",
                university: "Where do you study? (University)"
            },
            promoSection: "Do you have a promo code?",
            promoPH: "Please Enter your promocode",
            promoInCorrect: "Sorry! The promocode entered is invalid"
        },
        pricingCourseDialog: {
            title: "Our Pricing",
            subTitle: "You can choose one of the following methods, but note that all payment is due after the first free session.",
            currency: "L.E",
            bottomInfoText: "ٍRegistration requires NO payment"
        }
    },
    interestedDialog: {
        subTitle: "This course is not available now, please provide your information below to notify you once the course is up",
    },
    chatbot:{
        chatBotBtn: "Need Help ?",
        title: "How can we help",
        bottomText: "Want to inquire about something else please feel free to ",
        contactUs: "Contact us"
    },
    instructorPage: {
        aboutMeTitle: "About me",
        coursesTitle: "My Courses",
    },
    reviewPage: {
        title: "Review",
        firstTitle: "General Information",
        firstPH: "Full name*",
        secondPH: "Email*",
        thirdPH: "Phone number",
        secondTitle: "General Feedback",
        firstQuestion: "Are you satisfied with the amount of content you studied? (5 being very satisfied)",
        secondQuestion: "Are you satisfied with the quality of content you studied? (5 being very satisfied)",
        thirdQuestion: "Are you satisfied with the help offered to you by the instructor until now? (5 being very satisfied)",
        fourthQuestion: "Are you satisfied with Courzerve's customer support? (5 being very satisfied)",
        thirdTitle: "Ratings and Reviews",
        firstRating: "Overall course rating",
        secondRating: "Instructor Rating",
        firstRatingPH: "Course review*",
        secondRatingPH: "Instructor review*",
        submitBtn: "Submit your review"
    },
    applyBtn: "Apply Now",
    applyNowBtn: "Register Now",
    instructor: "Instructor",
    backToHome: "Back to Home",
    testemonials: "Testimonials",
    testmonialsGrad: "Graduated from the", 
    errorDialog: "Something went wrong!",
    errorDialogBtn: ["CANCEL", "Try Again"],
    successDialogBtn: "Done",
    terms: "Terms and conditions",
    errorText: {
        text1: "Something went wrong while processing your request. Please try again later."
    },
    notFoundPage: "It appears the page you are looking for does not exist",
    comingSoonCard: "I'm Interested!",
    tobeAnnounced:"To be announced",
    learnMore: "Learn more",
    infoDialog:{
        timeDialog: {
            firstStep: "There is currently an active round.",
            secondStep: "You can still apply on the course.",
            thirdStep: "Once another round starts we will contact you.",
        },
        PlaceDialog: {
            firstSectionTitle: "We are",
            secondSectionTitle: "Online",
            firstStep: "You should download ZOOM online meetings program",
            secondStep: "Once you completed your registration, a meeting link will be sent to you.",
            thirdStep: "Then you can join any session of the course immediately through that link.",
        },
        PaymentDialog:{
            Title: "Payment Methods",
            subTitle: "Payment is due only after the first free session using one of the these methods",
            firstStep: "AMAN",
            secondStep: "PayPal",
            thirdStep: "Credit Card",
            fourthStep: "Vodafon Cash"
        },
        button: "Register Now",
        cancelBtn: "Cancel",
        secondButton: "Ok, I got it"
    }
}