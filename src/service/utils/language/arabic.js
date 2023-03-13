export const getArabicDynamicText = (source, dynamicText) => {
    var returnText = ""
    switch (source) {
        case "EarlyBirdDialog":
            returnText = `If you apply before ${dynamicText[0].split("T")[0]} you will be charged ${dynamicText[1]}L.E instead of ${dynamicText[2]}L.E`
            break
        case "SuccessPage":
            returnText = `شكرا لك على التسجيل معانا ،في حد من فريق العمل هيتواصل معاك في أسرع وقت للإجابة على أي إستفسار`
            break
        case "PromoSuccess":
            returnText = `  أنت الأن تستمتع بخصم %${dynamicText[0]}  و سيتم شرح كيفية الحصول على هذا الخصم عند التواصل معك بعد التسجيل`
            break
        case "ReviewPara":
            returnText = ` نتمنى ان تكون مستمتع برحلتك معنا حتى الان في كورس <b>${dynamicText[0]}</b>`
            break
        case "SuccessPageReview":
            returnText = ` <b>${dynamicText[0]}</b> شكرا لمراجعتك الثمينة `
            break    
        case "PricingCard":
            returnText = `${dynamicText[0]}% وفر`
            break            
        default: break
    }
    return returnText
}

export const arabic = {
    navBar: {
        firstBtn: "جميع الدورات",
        secondBtn: "مين إحنا",
        thirdBtn: "اشتغل معانا",
        fourthBtn: "تواصل معنا"
    },
    landingPage: {
        landingPageMainText: "إتعلم البرمجة مُباشرة عبر الإنترنت",
        landingPageSubTitle: "كورزيرف بتقدملك",
        landingPageSearchPH: "What do you want to learn today?",
        checks:{
            firstTop:"التعليم عن طريق",
            firstBottom:"التطبيق العملي",
            secondTop:"حضور أول",
            secondBottom:"محاضرة مجاناََ",
            thirdTop:"الدعم المباشر",
            thirdBottom:"أثناء المحاضرة",
            fourthTop:"الحضور من",
            fourthBottom:"أي مكان",
        },
        landingCourseBtn:"اِطَّلع على الدورات",
        whyChooseUs: {
            title: "مميزاتنا؟",
            firstPart: { title: "جميع الدورات على الانترنت", discription: "تقدر تحضر من أي مكان فيه شبكة انترنت و حاسوبك الشخصي" },
            secondPart: { title: "مباشرة مع المعلم", discription: "هنجاوب علي كل أسئلتك و استفسارتك داخل المحاضرة" },
            thirdPart: { title: "مدرسين اخترناهم بعناية", discription: "بنختار المدرسين بدقة و عناية شديدة لضمان أفضل جودة" },
            fourthPart: { title: "المحاضرة الأولى مجانًا", discription: "إدفع فقط عندما تتأكد من جودة الكورس و أنه الكورس المناسب لك" }
        },
        howWeOperate: {
            title: "كيفية التسجيل",
            firstPart: { title: "إختار الكورس", discription: "إكتشف الكورس اللي يناسب إحتياجاتك" },
            secondPart: { title: "سجل في الكورس", discription: "سجل في أي كورس بدون دفع أي رسوم مقدماََ" },
            thirdPart: { title: "هنتواصل معاك", discription: "بعد التسجيل هنتواصل معاك في أسرع وقت للإجابة على أي استفسار" },
            fourthPart: { title: "إبدأ الكورس", discription: "احضر من أي مكان" }
        },
        ourNumbers: {
            Title: "أرقامنا",
            firstTitle: "الطلاب المتخرجين",
            secondTitle: "عدد الدورات",
            thirdTitle: "عدد الكورسات"
        },
        courseSection: {
            title: "جميع الدورات",
            courseBtn: "تفاصيل أكثر",
            courseCommingSoonBtn: "أنا مهتم"
        },
        jobSection: "حابب تشتغل معانا؟",
        jobSectionBtn: "قدم الآن"

    },

    aboutUsPage: {
        pageTitle: "مين احنا",
        firstTitle: "قصتنا",
        secondTitle: "ماذا نفعل",
        thirdTitle: "فريقنا",

        ourStory: {
            firstSection: "اوقات كتير بتدور علي كورسات وبتلاقي صعوبة في انك تلاقي الكورس المناسب ليك وبتتردد كتير وتسأل نفسك لو ده الكورس المناسب ليك ولا لا؟, طب انا ممكن اقدم ومفهمش من المدرس, انا كده ممكن ابقي بدفع فلوس كتير وفي الاخر مش هفهم ومش هستفيد, ومن هنا فكرة كورزيرف جت عشان تحل المشكلة دي",
            secondSection: " احنا هنا بنطمح اننا هنعرفك كل حاجة بخصوص الدورة الخاصة بيك حتي من قبل ما تبدأ. بنقدملك فيديو توضيحي عن كل الكورسات ومحتواياتها.",
            thirdSection: " مهمتنا هي اننا بنقدم منصة عالية الجودة و تتمتع بالحرفية  و تقدر الشغف للعلم. عشان كده احنا بنفتخر بمدى صرامة استراتيجية التوظيف ال نقدمها لمعلمينا. ",
            fourthSection: " تعلم، حاول، طبق، ممكن نقول إن دول الطرق الأكثر فعالية لاكتساب مهارة جديدة. الخطوة الأولى هي اننا بنتعرف على المفهوم الجديد، وبعدين التطبيق العملي من خلال مهام الدورة، ولكن المفهوم الجديد مش هيثبت لو مطبقناش الي اتعلمناه في مشاريع عملية. وده الي احنا بنعمله في كورزيرف. "
        },
        whatWeDo: {
            firstPart: { title: "مدرسين اخترناهم بعناية ", discription: " بنختار معلمينا بدقة و عناية شديدة لضمان أفضل جودة. " },
            secondPart: { title: "عرض فيديو توضيحي ", discription: " جميع دوراتنا متوفرلها فيديوهات توضيحية و عرض عام لمحتوى الكورس. " },
            thirdPart: { title: "جميع الكورسات عبر النت", discription: " ممكن تشارك في تحديد موقع كل دورة قبل أن تبدأ من خلال استطلاع للرأي." },
            fourthPart: { title: "أول محاضرة مجاناً ", discription: " ادفع بس لما تتأكد أن الكورس مناسب ليك. " }
        }
    },
    instructorJobsPage: {
        pageTitle: "وظائف المعلمين",
        firstTitle: " قيمنا ",
        secondTitle: "الوظائف المتاحة ",
        ourValues: {
            firstPart: { title: "انت شريك", discription: "نحن معا في هذه الرحلة" },
            secondPart: { title: "الموهبة فوق كل شيء ", discription: " نعم الخبرة لا يمكن الاستغناء عنها، ولكن الموهبة والشغف للتدريس هي أولويتنا القصوى " },
            thirdPart: { title: " ساعات عمل مرنة ", discription: " سيتم تحديد ساعات العمل الخاصة بك بناء على اتفاق " },
            fourthPart: { title: " نحن نتولى جميع المعاملات ", discription: " التسويق، وإدارة النفقات، والطلاب مسئوليتنا. أنت تقوم بالتدريس فقط " }
        },
        jobDialog: {
            title: " طلب وظيفة ",
            subTitle: " يرجى ملء البيانات التالية للتقدم بطلب للحصول على وظيفة معلم معنا.",
            name: "الاسم ",
            email: "البريد الالكتروني ",
            phoneNumber: "رقم التليفون ",
            resume: " السيرة الذاتية ",
            extraInfo: " أخبرنا المزيد عن نفسك"
        },
        jobCard: {
            firstPart: "المسؤوليات",
            secondPart: "المتطلبات"
        }
    },

    contactUsPage: {
        pageTitle: "اتصل بنا",
        firstTitle: "أترك رسالة",
        secondTitle: "معلومات التواصل",
        messageSection: {
            firstPH: "الاسم",
            secondPH: "الإيميل",
            thirdPH: "الرسالة",
            submitBtn: "أرسل"
        },
        ContactDetails: {
            discription: "لو لدبك أي استفسرات او شكاوى لا تردد بالتواصل معنا",
            phoneNumber: "01011843841",
            email: "dev@courzerve.com"
        }
    },
    coursePage: {
        firstTitle: "مع نهاية الكورس هتكون",
        firstTitle2: "مع نهاية الكورس",
        firstTitleNav: "النتائج",
        secondTitle: "المواعيد و المكان",
        secondTitleNav: "أين و متى",
        WhenWhereSubTitle: "التوقيت و المنصة سيكونان متاحان لاحقاً",
        thirdTitle: "المحتوى",
        fourthTitle: "على شان تبدأ محتاج",
        fifthTitle: "التفاصيل",
        sixthTitle: "أسئلة متكررة",
        faqSubTitle: ` هنتشرف بمساعدتك لو عندك اي إستفسار`,
        reviewSection: {
            title: "أراء",
            firstSubTitle: "متوسط التقييم",
            secondSubTitle: "تقييم مفصل ",
            innerTitle: "أراء"
        },
        whenAndWhere: {
            firstTitle: "معاد البداية",
            secondTitle: "هيكون على",
            thirdTitle: "أيام الكورس (أسبوعياََ)"
        },
        ApplySectionTitles: {
            firstTitle: "السعر عند الدفع مبكراً",
            secondTitle: "مصاريف الكورس",
            timingTitle: "معاد البداية",
            thirdTitle: "عدد المحاضرات",
            thirdTitle2:"محاضرة",
            thirdTitle3: "محاضرات",
            fourthTitle: "المدة",
            fifthTitle: "مستوى المهارة",
            PaymentTitle: "طرق الدفع",
            sixthTitle: "الكورس فى دورة حالياً ,سجل بياناتك الأن وهنتواصل معك عند بدء الدورة القادمة",
            seventhTitle: "أول محاضرة مجانية",
            ApplySectionInstructorBtn: "أذهب الى المعلم",
            dropDownValues:  ["Facebook", "Youtube", "Google", "ترشيح صديق", "سجلت في كورس سابقا مع كورزيرف", "من مكان اخر"],
            pricing: "مع العلم ان"
        },
        applyBtn: "للاسعار و التسجيل",
        applyDialog: {
            title: "التسجيل في الكورس",
            subTitle: "يرجى ملء البيانات المطلوبة و سيتم التواصل معك في أسرع وقت لشرح كيفية حضور المحاضرة المجانية و الكورس",
            personalInfo: {
                title: "معلومات شخصية",
                name: "الاسم بالكامل",
                age: "السن",
                phoneNumber: "رقم الهاتف",
                email: "البريد الألكترونى",
                extraInfo: "سمعت عننا منين؟",
                university: "(اين تدرس؟ (الجامعة"
            },
            promoSection: "؟promocode هل لديك ",
            promoPH: "promocode برجاء إدخال ",
            promoInCorrect: "خاطئ او انتهت صلاحيته promocode يبدو أن"
        },
        pricingCourseDialog: {
            title: "طرق الدفع",
            subTitle: "يمكنك الدفع عبر الطرق التالية لكن مع العلم إن أول محاضرة بتكون مجانية",
            currency: "جنية",
            bottomInfoText: "التسحيل بدون رسوم"
        }
    },
    interestedDialog: {
        subTitle: " الكورس ليس متاحاً حالياً ,اترك بياناتك و سنقوم باخبارك عندما يكون متاحاً",
    },
    chatbot:{
        chatBotBtn: "محتاج مساعدة ؟",
        title: "نرجو ان نكون ساعدناك",
        bottomText: "تريد الاستفسار عن شئ اخر لا تتردد في ",
        contactUs: "التواصل معنا"
    },
    instructorPage: {
        aboutMeTitle: "عن نفسى",
        coursesTitle: "الكورسات المسؤل عنها",
    },
    reviewPage: {
        title: "مراجعة",
        firstTitle: "المعلومات الشخصية",
        firstPH: "*الاسم الكامل",
        secondPH: "*البريد الالكتروني",
        thirdPH: "الهاتف المحمول",
        secondTitle: "ما مدى رضائك؟",
        firstQuestion: "هل أنت راضي عن كمية المحتوى المقدم في الكورس؟ (رقم ٥ يدل على الرضا التام)",
        secondQuestion: "هل أنت راضي عن جودة محتوى الكورس؟ (رقم ٥ يدل على الرضا التام)",
        thirdQuestion: "هل أنت راضي عن المساعدة المقدمة من المعلم في خلال فترة الكورس؟ (رقم ٥ يدل على الرضا التام)",
        fourthQuestion: "هل أنت راضي عن الدعم الفني لكورزيرف؟ (رقم ٥ يدل على الرضا التام)",
        thirdTitle: "التقييم العام",
        firstRating: "التقييم العام للكورس",
        secondRating: "تقييم المعلم",
        firstRatingPH: "*رأيك العام عن الكورس",
        secondRatingPH: "*رأيك العام عن المعلم",
        submitBtn: "أضف تقيمك"
    },
    applyBtn: "سجل",
    applyNowBtn: "سجل الآن",
    instructor: "المعلم",
    backToHome: "الرجوع للصفحة الرئيسية",
    testemonials: "شهادات نعتز بيها",
    testmonialsGrad: "إتخرج من تراك ",
    errorDialog: "هناك خطأ ما",
    errorDialogBtn: ["الغاء", "حاول مرة اخرى"],
    successDialogBtn: "تم",
    terms: "الشروط و الأحكام",
    errorText: {
        text1: "هناك خطأ ما حدث أثناء تلبية طلبك, رجاء المحاولة مرة أخرى  "
    },
    notFoundPage: "الصفحة التى تبحث عنها غير موجودة",
    comingSoonCard: "!مهتم",
    tobeAnnounced:"سوف يتم الاعلان عنه",
    learnMore: "أعرف المزيد",
    infoDialog:{
        timeDialog: {
            firstStep: "معاد المحاضرة لسه متحددش",
            secondStep: "بس أكيد تقدر تقدم",
            thirdStep: "و أول ما نفتح باب التسجيل، هيتم التواصل معك",
        },
        PlaceDialog: {
            firstSectionTitle: "محاضراتنا",
            secondSectionTitle: "اونلاين",
            firstStep: "ZOOM هتحمل برنامج",
            secondStep: "مع الانتهاء من التسجيل، في حد هيتابع معاك لحد ما تحضر أول محاضرة",
            thirdStep: "بعدها هيكون معاك اللينك اللي تقدر تحضر من خلاله حتى نهاية الكورس",
        },
        PaymentDialog:{
            Title: "طرق الدفع",
            subTitle: "الدفع عبر الطرق التالية بس بيكون بعد أول محاضرة اللي بتكون مجانية بالكامل",
            firstStep: "امان",
            secondStep: "بايبال",
            thirdStep: "بطاقة الائتمان",
            fourthStep: "فودافون كاش"
        },
        button: "سجل الان",
        cancelBtn: "Cancel",
        secondButton: "لقد فهمت",
        firstStep: "بعد ملئ الطلب",
        secondStep: "سنستقبل طلبك وسنقوم بالتواصل معك",
        thirdStep: "شكرا"
    }
}
