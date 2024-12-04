
const Flowers =[{name:"철쭉",language:"사랑의 즐거움",position:"강원도"},{name:"개나리",language:"희망",position:"경기도"},
    {name:"백목련",language:"이루지 못할 사랑",position:"충청도"}, {name:"백일홍",language:"행복",position:"전라도"},
    {name:"장미",language:"사랑",position:"경상도"},{name:"참꽃",language:"다정",position:"제주도"}]

    let input;
    let Flag =false;
    const function_46 = (Problem) =>{
        while(Flag==false)
        {
            window.onkeydown = (Enter) => {
                console.log(Enter)
                if(Enter.code === "Enter")
                {
                    switch(Problem.value)
                    {
                        case input:
                            console.log("작동중")
                            Flag =true
                    }
                    
                }
                else console.log("그외 값")};

                
        }
    }

    const Input = ((event)=>{
        input = event.target.value;
        
    })


    const getRandom = (min, max) =>{


        return Math.random() * (max - min) +min;
    }

    

export default{Flowers,getRandom,function_46, Input};