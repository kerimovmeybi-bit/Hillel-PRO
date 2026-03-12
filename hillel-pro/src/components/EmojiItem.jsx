function EmojiItem({emoji,votes,onClick}){

  return(

    <div
      className="emoji-item"
      onClick={onClick}
    >

      <span className="emoji">
        {emoji}
      </span>

      <span className="votes">
        {votes}
      </span>

    </div>

  );

}

export default EmojiItem;