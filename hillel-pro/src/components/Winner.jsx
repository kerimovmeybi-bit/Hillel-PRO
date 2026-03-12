function Winner({winner}){

  if(!winner) return null;

  return(

    <div className="winner">

      <h2>Переможець:</h2>

      <div className="winner-emoji">
        {winner.emoji}
      </div>

      <p>
        Кількість голосів: {winner.votes}
      </p>

    </div>

  );

}

export default Winner;