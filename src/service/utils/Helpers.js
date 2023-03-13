const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



// dateFormat=August 21.2019
export function refactorMMMMddyyyyDate(date) {
    let datetime = new Date(date)
    let formatted_date = ("0" + datetime.getDate()).slice(-2) + " " + months[datetime.getMonth()] + "," + datetime.getFullYear()
    return formatted_date
}

export const compearDates = (date1) => {
    const earlybirdDate = new Date(date1)
    const today = new Date()
    if (earlybirdDate >= today) return true
  }