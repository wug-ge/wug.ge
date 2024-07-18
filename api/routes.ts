import { ContactController } from "./controller/ContactController";
import { DefaultController } from "./controller/DefaultController";

export const Routes = [{
  method: 'get',
  route: '',
  controller: DefaultController,
  action: 'success'
}, {
  method: 'post',
  route: '/contact',
  controller: ContactController,
  action: 'saveContact'
}]