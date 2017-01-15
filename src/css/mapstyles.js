import { whiteTileClass, darkTileClass, pieceClass } from '../css/classnames';
import { fenIndexToPos, pieceCode } from '../helpers/fenmap';

const iter = (num) => new Array(num).fill(0);
const floor = Math.floor;
const pieceSequence = 'RNBQKBNRPPPPPPPPpppppppprnbqkbnr';

export const tileStyles = iter(64).map((c,i) => {
  let num = floor(i / 8) % 2 ? i + 1 : i;
  let pos = fenIndexToPos(i);
  let style = num % 2 === 0 ? whiteTileClass : darkTileClass;
  return {
    style: `${style} --${pos}--`,
    position: pos
  };
});

export const pieceStyles = iter(32).map((c,i) => {
  let num = i > 15 ? i + 32 : i;
  let pos = fenIndexToPos(num);
  return {
    style: `${pieceClass}`,
    entity: pieceCode[pieceSequence[i]],
    name: pieceSequence[i],
    position: pos
  };
});

export const pieceStyle = (base, selected, oldpos, newpos) => {
  return selected ?
    `${base} red --${newpos || oldpos}--` :
    `${base} --${oldpos}--`;
};