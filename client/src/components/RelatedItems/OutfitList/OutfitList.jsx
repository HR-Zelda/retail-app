/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Outfit from './Outfit';
import AddOutfit from './AddOutfit';

function OutfitList() {
  const {
    outfits, setOutfits, outfitIndex, setOutfitIndex,
  } = useGlobalContext();
  useEffect(() => {
    setOutfits(outfits);
  }, [outfits, setOutfits]);
  function clickRight() {
    if (outfitIndex + 3 < outfits.length) {
      setOutfitIndex(outfitIndex + 1);
    }
  }
  function clickLeft() {
    if (outfitIndex > 0) {
      setOutfitIndex(outfitIndex - 1);
    }
  }
  function fillEmpty() {
    const emptyCells = [];
    for (let i = 0; i < (3 - outfits.length); i += 1) {
      emptyCells.push(<EmptyOutfit key={i} />);
    }
    return emptyCells;
  }
  return (
    <Outline>
      <LeftBox>
        {outfitIndex === 0 || outfits.length < 3
          ? <LeftButton /> : (
            <LeftButton onClick={() => clickLeft()}> &lt; </LeftButton>
          )}
      </LeftBox>
      <StyleList>
        {(outfits.slice(outfitIndex, outfitIndex + 4)).map((outfit, i) => <Outfit outfit={outfit} key={i} index={i} />)}
        {(outfits.length <= 3 || (outfits.length >= 4 && outfits.length - outfitIndex === 3))
         && <AddOutfit /> }
        {(outfits.length <= 3) && fillEmpty()}
      </StyleList>
      <RightBox>
        {((outfits.length >= 4 && outfitIndex === outfits.length - 4) || (outfitIndex === 0 && outfits.length > 3))
          ? <RightButton onClick={() => clickRight()}> &gt; </RightButton>
          : <RightButton /> }
      </RightBox>
    </Outline>
  );
}

const Outline = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const StyleList = styled.div`
  display: flex;
  float: left;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  align-content: space-evenly;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: flex-end;
  float: left;
  align-items: center;
  flex-grow: 1;
`;

const RightBox = styled.div`
  display: flex;
  float: left;
  align-items: center;
  flex-grow: 1;
`;

const LeftButton = styled.button`
  display: flex;
  align-self: center;
  position: absolute;
  font-width: bold;
  font-size: 60px;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.60;
  }
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

const RightButton = styled.button`
  display: flex;
  align-self: center;
  position: absolute;
  font-width: bold;
  font-size: 60px;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.60;
  }
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
`;

const EmptyOutfit = styled.div`
  width: 225px;
  height: 225px;
  border: 15px solid transparent;
`;

export default OutfitList;
