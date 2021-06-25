import * as tsx from "vue-tsx-support";
import { VApp } from "vuetify/es5";
import { VNode } from "vue";

export default tsx.component({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render(): VNode {
    return (
      <VApp>
        <h1>{this.msg}</h1>
      </VApp>
    );
  },
});
