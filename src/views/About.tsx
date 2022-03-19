import { Component } from "vue-property-decorator";
import { VueComponent } from "@/shims-vue";

interface AboutProps {}

@Component
export default class About extends VueComponent<AboutProps> {
  public render() {
    return <div class="about">about</div>;
  }
}
