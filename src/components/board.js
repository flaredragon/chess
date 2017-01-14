import React from 'react';
import Tile from '../containers/tile';
import Piece from '../containers/piece';
import { tileStyles, pieceStyles } from '../helpers/mapstyles';
import { boardClass } from '../css/classnames';

const Board = (count) => (
  <div className={boardClass}>
    {tileStyles.map((style,i) =>
      <Tile style={style} key={i} />
    )}
    {pieceStyles.map((x, i) =>
      <Piece style={x.style} key={i} ent={x.ent}/>
    )}
  </div>
);

export default Board;
