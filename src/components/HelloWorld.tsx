import { VueComponent } from "@/shims-vue";
import { Component, Prop } from "vue-property-decorator";
import "./index.scss";
interface HelloWorldProps {
  msg: string;
}

@Component({
  name: "HelloWorld",
})
export default class HelloWorld extends VueComponent<HelloWorldProps> {
  @Prop() private readonly msg!: string;

  public render() {
    return (
      <div class="hello-world">
        <h1>{this.msg}</h1>
        <div class="default">
          <div class="content"></div>
        </div>
        <div class="dark">
          <div class="content"></div>
        </div>
        <div class="blue">
          <div class="content"></div>
        </div>
      </div>
    );
  }
}
