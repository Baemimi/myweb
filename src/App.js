import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js"

import mini from "./mini.jpg";

function App() {
  return (
    <div style = {{backgroundColor : "ivory"}}>
      <Grid centered>
        <Grid.Row>
          <Image
            src={mini}
            centered
            style={{ width: 1600, height: 1100, marginTop: 100 }}
          />
        </Grid.Row>
        <Grid.Row>
          <br />
          <Buttons/>

        </Grid.Row>
      </Grid>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment outline" />
          댓글을 달아주세요.
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="mobile alternate" />
          Contact Me
        </Header>
      </Divider>
      <br />
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook" onClick = {()=> alert("준비중입니다.")} />
          <Button circular color="twitter" icon="twitter" onClick = {()=> alert("준비중입니다.")} />
          <Button circular color="youtube" icon="youtube" onClick = {()=> alert("준비중입니다.")} />
          <Button circular color="google plus" icon="google plus" onClick = {()=> alert("준비중입니다.")} />
        </Grid>
      </div>
    </div>
  );
}

export default App;
