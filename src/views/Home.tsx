import HelloWorld from "@/components/HelloWorld";
import { VueComponent } from "@/shims-vue";
import { Component } from "vue-property-decorator";

interface HomeProps {
  msg: string;
}

@Component
export default class Home extends VueComponent<HomeProps> {
  private msg = "这个快速建立vue模版的项目";

  public render() {
    return (
      <div class="home">
        <img alt="Vue logo" src={require("../assets/logo.png")} />
        <HelloWorld msg={this.msg} />
      </div>
    );
  }
}
