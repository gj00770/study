import { useMemo, useState } from "react";



function Componenet(){
    const valuse = cal();  // 렌더링될떄마다 cal 이 반복적으로 호출된다
    return <div>{value}</div>
}
function cal(){
    return 10;
}
렌더링
함수가호찰될떄마다 모든 내ㅑ부변수 초기화됩니다.Componenet




function Componenet(){
    const valuse = useMemo(90=>cal(),[]);  // 렌더링될떄마다 cal 이 반복적으로 호출된다
    return <div>{value}</div>
}
function cal(){
    return 10;
}

useMemo(callback,[dependency])  


useMemo는 꼭필요한값만 사용한다
값을 메모리에저장하기떄문에 



const hardCalculate = (number) =>{
    console.log('어려운계산');
    for (let i = 0 ; i < 9999 ; i++){}//생각하는시간
    return num + 1000000;
}



function App(){
    const  [hardNuber,setHardNunber] = useState(1);
   const hardSu = hardCalculate(hardNumber);
   
   return(
       <div>
        <div >
           어려운 계산기

           </div>   
           <input type='number' value={hardNuber} onChange={(e) => setHardNunber)_}/>
       </div>
   )
}