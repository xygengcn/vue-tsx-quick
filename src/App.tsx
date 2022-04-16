import { Component } from "vue-property-decorator";
import "./index.scss";
import { VueComponent } from "./shims-vue";

interface AppProps {}
@Component({
  name: "App",
})
export default class App extends VueComponent<AppProps> {
  public render() {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    );
  }
}
