import * as React from "react";
import { connect } from "../overmind";

class Home extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  state = {
    check: null,
    input: "",
  };

  componentDidMount() {
    // this.props.overmind.actions.testingOvermind.getUser();
  }
  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <div id={"divCheck"}>Hello Next.js</div>
        <input onChange={this.onChange} type="text" />
      </div>
    );
  }
}
export default Home;
