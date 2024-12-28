
const getStatusColors = (status: string)=>{
      switch (status){
          case "NEW":
              return "bg-blue-100 text-blue-600 text-center";

          case "ON_GOING":
              return "bg-amber-100 text-amber-600 text-center";

          case "VALIDATED":
              return "bg-green-100 text-green-600 text-center";

          case "REJECTED":
              return "bg-red-100 text-red-600 text-center";

          default:
             return "";
      }
}

const getStatusLabel = (status: string)=>{
    switch (status){
        case "NEW":
            return "New";

        case "ON_GOING":
            return "ON GOING";

        case "VALIDATED":
            return "VALIDATED";

        case "REJECTED":
            return "REJECTED";

        default:
            return "";
    }
}

export {getStatusColors,getStatusLabel}