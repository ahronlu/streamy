import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "semantic-ui-react";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();

  const stream = useSelector(
    (state) => state.streams && state.streams[match.params.id]
  );

  useEffect(() => {
    dispatch(fetchStream(match.params.id));
  }, [dispatch, match]);

  const onSubmit = (formValues) => {
    dispatch(editStream(match.params.id, formValues));
  };

  return (
    <>
      <h3>Edit a Stream</h3>
      {!stream ? (
        <Loader active />
      ) : (
        <StreamForm
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default StreamEdit;
