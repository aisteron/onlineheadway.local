import { Fetch, qs, qsa } from "../libs";
import { step } from "./step";

export function Ui() {
	step.init()
	callback_form()
	yandex_metrika_listeners()
}



function callback_form() {
	let d = qs('dialog.cb')
	qsa('li.cb').forEach(el => {
		el.listen("click", _ => {
			d.showModal()
		})
	})

	qs('dialog.cb .head .close').listen("click", _ => d.close())

	qs('form', d).listen("submit", async e => {

		e.preventDefault();
		let res = await Fetch("cb", { phone: qs('form input', d).value }, "/api/")
		if (!res) return;

		d.close()

		await new Promise(resolve => setTimeout(() => {
			qs('dialog.success').showModal()
			qs('dialog.success button.close').listen("click", _ => qs('dialog.success').close())

			const ymevent = new CustomEvent("ym_event", { detail: { name: "callback", }, });
			document.dispatchEvent(ymevent);

			resolve()
		}, 500))



	})
}

function yandex_metrika_listeners() {

	document.listen("ym_event", e => {
		switch (e.detail.name) {
			case "callback":
				try { ym(99604688, 'reachGoal', 'callback') }
				catch (e) { console.log(e) }
				break;
			case "offer_form":
				try { ym(99604688, 'reachGoal', 'offer_form') }
				catch (e) { console.log(e) }
				break;
			case "tg_click":
				try { ym(99604688, 'reachGoal', 'tg_click') }
				catch (e) { console.log(e) }
				break;
			case "wa_click":
				try { ym(99604688, 'reachGoal', 'wa_click') }
				catch (e) { console.log(e) }
				break;
		}
	})

	// клик по телеграму
	qsa('.tg').forEach(el => {
		el.listen("click", e => {
			const ymevent = new CustomEvent("ym_event", { detail: { name: "tg_click", }, });
			document.dispatchEvent(ymevent);
		})
	})
	// клик по вацапу
	qsa('.wa').forEach(el => {
		el.listen("click", e => {
			const ymevent = new CustomEvent("ym_event", { detail: { name: "wa_click", }, });
			document.dispatchEvent(ymevent);
		})
	})
}

