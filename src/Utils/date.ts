//const dayOfWeek= ["Mon.","Tue.","Wed.","Thu.", "Fri.","Sat.","Sun."]
const monthOfYear=["Jan.","Feb.","Mar.","Apr.","Mai.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."]

const formatDate = (value:string)=>{
     const formatDay = (day: number)=>{
          return  `0${day}`.slice(-2)
     }
     const date = new Date(value.split(" ")[0]);

     return `${formatDay(date.getDate() )} ${monthOfYear[date.getMonth()]} ${date.getFullYear()}`

}
export {formatDate}