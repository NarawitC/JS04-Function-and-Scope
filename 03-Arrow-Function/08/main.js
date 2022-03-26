const score = (text) => {
  if (text === 'win') {
    return 3;
  } else if (text === 'lose') {
    return 0;
  } else if (text === 'draw') {
    return 1;
  }
};

// score('win');
