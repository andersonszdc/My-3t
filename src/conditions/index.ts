export const Conditions = (plays: any) => {
  if (
    plays[0].player === plays[1].player &&
    plays[0].player === plays[2].player &&
    plays[0].player !== undefined
  ) {
    return true;
  } else if (
    plays[3].player === plays[4].player &&
    plays[3].player === plays[5].player &&
    plays[3].player !== undefined
  ) {
    return true;
  } else if (
    plays[6].player === plays[7].player &&
    plays[6].player === plays[8].player &&
    plays[6].player !== undefined
  ) {
    return true;
  } else if (
    plays[0].player === plays[3].player &&
    plays[0].player === plays[6].player &&
    plays[0].player !== undefined
  ) {
    return true;
  } else if (
    plays[1].player === plays[4].player &&
    plays[1].player === plays[7].player &&
    plays[1].player !== undefined
  ) {
    return true;
  } else if (
    plays[2].player === plays[5].player &&
    plays[2].player === plays[8].player &&
    plays[2].player !== undefined
  ) {
    return true;
  } else if (
    plays[0].player === plays[4].player &&
    plays[0].player === plays[8].player &&
    plays[0].player !== undefined
  ) {
    return true;
  } else if (
    plays[2].player === plays[4].player &&
    plays[2].player === plays[6].player &&
    plays[2].player !== undefined
  ) {
    return true;
  }

  return false;
};
