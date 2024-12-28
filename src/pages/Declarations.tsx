import {formatDate, getStatusColors, getStatusLabel, Mes_Declarations} from "../Utils";


function Declarations() {
    return (
        <div className=" bg-white shadow-md rounded-md">
            <article className="grid grid-cols-12 items-center p-2">
                <span className={`font-bold  p-2 `}>Date</span>
                <span className={`font-bold  p-2  col-span-2`} >Child</span>
                <span className={`font-bold  p-2`}>Dateofbirth</span>
                <span className={`font-bold  p-2`}>Hospital</span>
                <span className={`font-bold  p-2 col-span-2`} >Parent 1</span>
                <span className={`font-bold  p-2 col-span-2`} >Parent 2</span>
                <span className={`font-bold  p-2 text-center`}>Status</span>
                <span className={`font-bold  p-2`}>Action</span>
            </article>


            {Mes_Declarations.map((item,index) =>(
                <article key={item._id} className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${index % 2 === 0? 'bg-gray-200':null}`}>
                    <span  className={` p-2`}>{formatDate(item.registered)}</span>
                    <span   className={` p-2 col-span-2 flex flex-col`} >
                        <span >{item.child.firstName}</span>
                        <span className="uppercase">{item.child.lastName}</span>
                    </span>
                    <span className={` p-2`}>{formatDate(item.child.birthDate)}</span>
                    <span className={` p-2`}>
                        <span >{item.compagny.name}</span>
                    </span>
                    <span className={` p-2 col-span-2 flex flex-col`} >
                        <span >{item.firstParent.firstName}</span>
                        <span className="uppercase">{item.firstParent.lastName}</span>
                    </span>
                    <span className={` p-2 col-span-2 flex flex-col`} >
                        <span >{item.secondParent.firstName}</span>
                        <span className="uppercase">{item.secondParent.lastName}</span>
                    </span>

                        <span className={` p-2 text-center ${getStatusColors(item.status)}`}>{ getStatusLabel(item.status) }</span>
                        <span className={` p-2 flex flex-col`}>Action</span>
                </article>
            ))}
        </div>


    )
}

export default Declarations
