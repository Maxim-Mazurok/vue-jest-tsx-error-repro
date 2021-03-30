import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import HelloWorld from "./components/HelloWorld";

export default tsx.component({
  name: "App",
  render(): VNode {
    return <HelloWorld msg={"hello, world"} />;
  },
});
