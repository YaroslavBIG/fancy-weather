function getIcoBlock(ico) {
  const icoBlock = document.createElement('div');
  const insert = () => {
    icoBlock.append(ico);
  };
  ico.onload = insert();
  return icoBlock;
}

export default getIcoBlock;
