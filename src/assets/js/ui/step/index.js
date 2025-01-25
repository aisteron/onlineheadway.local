import { qs } from "../../libs"
import { Count } from "./components/Count";
import { Form } from "./components/Form";
import { Format } from "./components/Format";
import { Goals } from "./components/Goals";
import { Sphere } from "./components/Sphere";
import { Time } from "./components/Time";
import { Actions, State } from "./state";



export const step = {

	init() {
		document.listen("mithril_loaded", _ => {
			var root = qs('section.offer .root')
			m.mount(root, () => {
				const state = State();
				const actions = Actions(state);
				return {
					view: () => [
						Format(state, actions),
						Count(state, actions),
						Goals(state, actions),
						Time(state, actions),
						Sphere(state, actions),
						Form(state, actions),
					]
				};
			});


		})

	}
}