import EmojiItem from "./EmojiItem";

function EmojiList({emojis,votes,onVote}){

  return(

    <div className="emoji-list">

      {emojis.map((emoji,index)=>(
        <EmojiItem
          key={index}
          emoji={emoji}
          votes={votes[index]}
          onClick={()=>onVote(index)}
        />
      ))}

    </div>

  );

}

export default EmojiList;