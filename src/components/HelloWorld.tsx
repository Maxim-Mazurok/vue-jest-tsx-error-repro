import * as tsx from "vue-tsx-support";
import VThemeProvider from "vuetify/lib/components/VThemeProvider";
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
      <VThemeProvider>
        <h1>{this.msg}</h1>
      </VThemeProvider>
    );
  },
});
