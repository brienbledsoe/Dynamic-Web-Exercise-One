import React from 'react';




// function TestingReact({ //one method
//   place = '',
//   county = '',
//   person
// }) {
//
//   return (
//     <div>
//     <p>{place}, {county}</p>
//     // <p>Liveing there is{person}</p>
//     {person ? <p> Living there is {person}</p> : null}
//     </div>
//   );
// }

// function TestingReact(props){ second method
//   return (
//     <div>
//       <p>{props.place}, {props.county}</p>
//       {props.person && <p>Living there is {props.person}</p>}
//     </div>
//   );
// }

function TestingReact({
articleData = {}
}) {
return (
  <div>
    <h2>{articleData.title}</h2>
    <p>articleData.text</p>
  </div>
);

}


const sampleData = [
{
title:'',
text:''
},

{
title: '',
text: ''
},

{
title: '',
text: ''
}
]

export default function TestingContainer(props){
  let city = 'NYC';
  let county = 'Kings';
  let me = 'James';

// return(
//   <div>
//   <testingReact place={city} county={county}/>
//   </div>
// )

return(
  <div>
  {sampleData.map((article,i)=>(
    <TestingReact key={i} articleData={article} />
  ))}
  <div>
);

}
