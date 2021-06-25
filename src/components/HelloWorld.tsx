import * as tsx from "vue-tsx-support";
import { VBtn } from "vuetify/lib";
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
    return <VBtn>{this.msg}</VBtn>;
  },
});
