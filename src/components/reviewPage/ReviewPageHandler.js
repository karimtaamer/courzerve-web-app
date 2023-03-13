
export const courseDataHandler = async(courseData, roundId, courseId, makeRequest) => {
    var feedBack = {}
    var courseFinalData = {}
     feedBack = {
        'roundId': roundId,
        'courseId': courseId,
        'customerEmail': courseData.email,
        'contentAmount': courseData.contentAmount,
        'contentSatisfaction': courseData.contentSatisfaction,
        'instructorHelp': courseData.instructorHelp,
        'courzerveSupport': courseData.courzerveSupport
}
    
    courseFinalData = {'email': courseData.email, 'name': courseData.name, 'rating': courseData.courseRating, 'review': courseData.courseReview, 'isApproved': false, 'imageUrl': courseData.imageUrl, 'feedback': feedBack}
    await makeRequest('/course/rating', courseFinalData, null, { headers: { 'courseId': courseId } })
}

export const InstructorDataHandler = async(courseData, instructorData, makeRequest, instructorId) => {
   const instructorFinalData= {'email': courseData.email, 'name': courseData.name, 'rating': instructorData.instructorRating, 'review': instructorData.instructorReview, 'imageUrl': courseData.imageUrl, 'isApproved': false,}
    await makeRequest('/instructor/rating', instructorFinalData, null, { headers: { 'instructorId': instructorId } })
}