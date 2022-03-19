import HelloWorld from "@/components/HelloWorld";
import { VueComponent } from "@/shims-vue";
import { Component } from "vue-property-decorator";

interface HomeProps {
  msg: string;
}

@Component
export default class Home extends VueComponent<HomeProps> {
  private msg = "jjjj";

  public render() {
    return (
      <div class="home">
        <img alt="Vue logo" src={require("../assets/logo.png")} />
        <HelloWorld msg={this.msg} />
      </div>
    );
  }
}
