import { Fetch, qs } from "../../../libs";

let obj = [
	{
		name: "name",
		label: "Ваше имя",
		type: "text"
	},
	{
		name: "phone",
		label: "Ваш номер телефона",
		type: "tel"
	},
	{
		name: "email",
		label: "Ваша электронная почта",
		type: "email"
	},
	{
		name: "comment",
		label: "Комментарий",
		type: "textarea"
	},
];

const to_server = async (e, state) => {
	e.preventDefault()

	state.goals = Array.from(state.goals)
	let res = await Fetch("form", state, "/api/")
	if (!res) return
	if (res?.success === false) return new Snackbar('Ошибка отправки')

	qs('dialog.success').showModal()
	qs('dialog.success button.close').listen("click", _ => qs('dialog.success').close())

	const ymevent = new CustomEvent("ym_event", { detail: { name: "offer_form", }, });
	document.dispatchEvent(ymevent);



}

export const Form = (state, actions) => {
	let path = state.path.slice(-1)[0]

	if (path == 'form')
		return m('div', { class: "form" },
			m('h3', 'Для получения индивидуального предложения оставьте, пожалуйста, свои контакты'),

			m('form', { onsubmit: e => to_server(e, state) },

				m('fieldset',
					m('legend', "Форма обратной связи"),
					obj.map(el =>
						el.type != 'textarea'
							? m('input', {
								type: el.type,
								name: el.name,
								placeholder: el.label,
								value: state.form[el.name],
								onblur: e => actions.set_form({ name: el.name, value: e.target.value })
							})
							: m('textarea', {
								name: el.name,
								placeholder: el.label,
								value: state.form[el.name],
								onblur: e => actions.set_form({ name: el.name, value: e.target.value })

							})
					)
				),

				m('.buttons',
					m('button', { type: "button", onclick: () => actions.set_path("sphere") }, 'Назад'),
					m('button', { type: "submit", class: "purple" }, 'Отправить'),
				),

			),



		)
}