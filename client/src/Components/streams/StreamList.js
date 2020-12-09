import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Item, List } from "semantic-ui-react";
import { fetchStreams } from "../../actions";

const StreamList = () => {
  const dispatch = useDispatch();

  const streams = useSelector((state) => Object.values(state.streams));

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);
  return (
    <div>
      <h2>Streams</h2>
      <List celled>
        {streams.map((stream) => (
          <Item key={stream.id}>
            <Icon name="camera" size="large" className="middle aligned" />
            <Item.Content>
              {stream.title}
              <Item.Description>{stream.description}</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default StreamList;
