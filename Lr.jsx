// import React from "react";

// const Lr =()=>{
//     let fruits = ["Apple", "Mango", "Guava", "WaterMelon"];
//     return (
//         <div>
//             <h1>fruits List</h1>
//             <ul>
//                 {fruits.map((fruit,index)=>(
//                     <li key = {index}>{fruit}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
// export default Lr;

import React from "react";

const Lr = () => {
    let profiles = [
        {
            id: 1,
            name: "ansul",
            age: "50 year",
        },
        {
            id: 2,
            name: "anand",
            age: "10 year",
        },
        {
            id: 3,
            name: "akash",
            age: "60 year",
        },
    ];
    return (
        <>
            <h1>User List</h1>
            <ul>
                {profiles.map((profile) => (
                    <li ket={profiles.id}>
                        {profile.name},
                        {profile.age}
                    </li>
                ))}
            </ul>
        </>

    );
};
export default Lr;