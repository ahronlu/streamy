import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { deleteStream } from "../../actions";
import history from "../../history";

const StreamDelete = ({ match }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStream(match.params.id));
  };

  const goBack = () => {
    history.push("/");
  };

  return (
    <Modal open onClose={goBack}>
      <Modal.Header>Delete Stream</Modal.Header>
      <Modal.Content>
        Are you sure you want to delete this stream?
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={goBack}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default StreamDelete;
