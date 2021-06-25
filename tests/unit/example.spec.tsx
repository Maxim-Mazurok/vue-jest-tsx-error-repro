import { render } from "@testing-library/vue";
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import Vuetify from "vuetify";
import HelloWorld from "@/components/HelloWorld";

it("renders app name", () => {
  const msg = "new message";
  const { getByText } = render(
    tsx.component({
      render(): VNode {
        return <HelloWorld msg={msg} />;
      },
    }),
    { vuetify: new Vuetify() }
  );

  expect(() => getByText(msg)).not.toThrow();
});
