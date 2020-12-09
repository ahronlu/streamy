import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "semantic-ui-react";
import { fetchStream } from "../../actions";

const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();

  const stream = useSelector(
    (state) => state.streams && state.streams[match.params.id]
  );

  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch]);

  return <div>{!stream ? <Loader active /> : <h1>{stream.id}</h1>}</div>;
};

export default StreamEdit;
