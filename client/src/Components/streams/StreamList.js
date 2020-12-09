import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams } from "../../actions";

const StreamList = () => {
  const dispatch = useDispatch();

  const streams = useSelector((state) => state.streams);

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);
  return <div></div>;
};

export default StreamList;
