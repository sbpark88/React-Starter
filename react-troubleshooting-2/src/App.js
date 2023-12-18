import "ol/ol.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext } from "react";
import { createMockMarker, renderMarker } from "./utils";
import { transform } from "ol/proj";
import { OlContext } from "./components/common/OlContextProvider";
import {
  addMarker,
  setMarkerScale,
  setMarkerTextScale,
  addComment,
  setCommentInput,
} from "./store";

import { styles } from "./styles";

const SEOUL_CITY_HALL_LONLAT = [126.9784147, 37.5666805];

const CommentOverlay = () => {
  const dispatch = useDispatch();
  const { comments, commentInput } = useSelector((s) => s);
  const commentList = comments.map((comment) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentInput === "") return;
    dispatch(addComment({ content: commentInput }));
    dispatch(setCommentInput({ commentInput: "" }));
  };
  const handleCommentInputChange = (e) =>
    dispatch(setCommentInput({ commentInput: e.target.value }));

  return (
    <div style={styles.CommentOverlayRoot}>
      <ul style={styles.CommentList}>{commentList}</ul>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={commentInput}
          onChange={handleCommentInputChange}
          style={styles.block}
        />
        <button style={styles.block}>Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const {
    markers,
    mapConfig: { markerScale, markerTextScale: textScale },
  } = useSelector((s) => s);
  const { map, view, vectorSource } = useContext(OlContext);

  useEffect(() => {
    map.setTarget("map");

    view.setZoom(12);
    view.setCenter(transform(SEOUL_CITY_HALL_LONLAT, "EPSG:4326", "EPSG:3857"));
  }, [map, view]);
  markers.forEach((marker) =>
    renderMarker(marker, vectorSource, { markerScale, textScale }),
  );

  const handleAddMarker = () => {
    dispatch(addMarker({ marker: createMockMarker() }));
  };
  const handleMarkerScale = (e) =>
    dispatch(setMarkerScale({ markerScale: e.target.value / 10 }));
  const handleMarkerTextScale = (e) =>
    dispatch(setMarkerTextScale({ markerTextScale: e.target.value / 10 }));

  return (
    <>
      <div style={styles.AppRoot}>
        <div
          style={{
            ...styles.textCenter,
            ...styles.flexCenter,
            padding: "0px 24px",
          }}
        >
          COVID-19 History(Mock)
        </div>
        <label>Marker Size</label>
        <input
          type="range"
          min="3"
          max="25"
          value={markerScale * 10}
          onChange={handleMarkerScale}
        />
        <label>Marker Text Scale</label>
        <input
          type="range"
          min="3"
          max="25"
          value={textScale * 10}
          onChange={handleMarkerTextScale}
        />
        <button onClick={handleAddMarker}>Add Marker</button>
      </div>
      <div id="map" style={styles.MapRoot}></div>
      <CommentOverlay />
    </>
  );
};

export default App;
