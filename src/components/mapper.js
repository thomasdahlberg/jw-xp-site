import React, {Fragment} from 'react';
import Window from './window';

const Mapper = (props) => {
  let { library } = props;
  let painting = [];
  let photography = [];
  let video = [];
  let recycleBin = [];

  for(let i = 0; i < library.length; i++) {
    switch (library[i].node.type) {
      case "Painting":
        painting.push(library[i]);
        break;
      case "Photography":
        photography.push(library[i]);
        break;
      case "Video":
        video.push(library[i]);
        break;
      default:
        recycleBin.push(library[i]);
    }
  }

  return (
    <Fragment>
      <Window 
        active = {props.painting}
        hidden = {props.hidePainting}
        name = {"Painting"}
        library = {painting}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
      />
      <Window
        active = {props.videos}
        hidden = {props.hideVideos}
        name = {"Videos"}
        library = {video}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
      />
      <Window
        active = {props.photography}
        hidden = {props.hidePhotography}
        name = {"Photo"}
        library = {photography}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
      />
      <Window
        active = {props.recycle}
        hidden = {props.hideRecycle}
        name = {"Recycle Bin"}
        library = {recycleBin}
        handleCloseWindow = {props.handleCloseWindow}
        handleHideWindow = {props.handleHideWindow}
      />
    </Fragment>
  )
}

export default Mapper;