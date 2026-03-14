import { useState } from "react";

const emojis = ["😀", "😂", "😍", "😎", "🤩"];

function EmojiList() {

  const [counts, setCounts] = useState([0,0,0,0,0]);

  const handleClick = (index) => {

    const newCounts = [...counts];
    newCounts[index]++;

    setCounts(newCounts);

  };

  return (

    <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>

      {emojis.map((emoji,index)=>(
        
        <div
          key={index}
          onClick={()=>handleClick(index)}
          style={{cursor:"pointer", fontSize:"40px"}}
        >
          {emoji}
          <p>{counts[index]}</p>
        </div>

      ))}

    </div>

  );

}

export default EmojiList;
