let obj = [
	{
		label: "1-3 месяца",
		value: "1-3"
	},
	{
		label: "3-6 месяцев",
		value: "3-6"
	},
	{
		label: "6-12 месяцев",
		value: "6-12"
	},
	{
		label: "Нет временных рамок",
		value: "nope"
	},
]

export const Time = (state, actions) => {

	let path = state.path.slice(-1)[0]

	if (path == 'time')
		return m('div', { class: "time" },
			m('h3', 'Какие временные рамки Вы ставите для обучения?'),

			m('.radios',
				obj.map(el =>
					m('label',
						m('input', {
							type: "radio",
							name: "period",
							value: el.value,
							checked: state.period == el.value,
							onchange: e => actions.set_period(e.target.value)
						}),
						m('span', { class: "l" }, el.label)
					)
				)
			),


			m('.buttons',
				m('button', { onclick: () => actions.set_path("goals") }, 'Назад'),
				m('button', { class: 'purple', onclick: () => actions.set_path("sphere") }, 'Далее'),
			),
		)
}