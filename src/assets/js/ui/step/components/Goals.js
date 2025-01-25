const obj = [
	{
		label: 'Свободно общаться с иностранцами',
		value: 'free'
	},
	{
		label: 'Вести деловую переписку',
		value: 'deal'
	},
	{
		label: 'Получить международные сертификаты',
		value: 'cert'
	},
	{
		label: 'Читать проф. литературу на английском',
		value: 'lit'
	},
	{
		label: 'Другие',
		value: 'other'
	},

];


export const Goals = (state, actions) => {
	let path = state.path.slice(-1)[0]
	if (path == 'goals')
		return m('.goals',
			m('h3', 'Какие цели Вы ставите в рамках изучения английского?'),
			m('.labels',
				obj.map(el => m('label',
					m('input', {
						type: "checkbox",
						value: el.value,
						checked: state.goals?.has(el.value),
						onchange: e => actions.set_goal({ checked: e.target.checked, value: e.target.value })
					}),
					m('span', el.label)
				))

			),

			m('.buttons',
				m('button', { onclick: () => actions.set_path("count") }, 'Назад'),
				m('button', { class: 'purple', onclick: () => actions.set_path("time") }, 'Далее'),
			),
		)
}