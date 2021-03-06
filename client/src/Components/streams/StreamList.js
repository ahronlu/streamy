import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Item, List } from "semantic-ui-react";
import { fetchStreams } from "../../actions";

const StreamList = () => {
  const dispatch = useDispatch();

  const streams = useSelector((state) => Object.values(state.streams));
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderAdmin = (stream) => {
    if (stream.userId === auth.userId) {
      return (
        <div className="right floated content">
          <Button as={Link} to={`/streams/edit/${stream.id}`} primary>
            Edit
          </Button>
          <Button as={Link} to={`/streams/delete/${stream.id}`} negative>
            Delete
          </Button>
        </div>
      );
    }
  };
  return (
    <div>
      <h2>Streams</h2>
      <List celled>
        {streams.map((stream) => (
          <Item key={stream.id}>
            {renderAdmin(stream)}
            <Icon name="camera" size="large" className="middle aligned" />
            <Item.Content>
              {stream.title}
              <Item.Description>{stream.description}</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </List>
      {auth.isSignedIn && (
        <Button as={Link} primary to="/streams/new" floated="right">
          Create Stream
        </Button>
      )}
    </div>
  );
};

export default StreamList;
