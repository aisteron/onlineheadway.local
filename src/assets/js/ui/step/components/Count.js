export const Count = (state, actions) => {
	let path = state.path.slice(-1)[0]

	if (path == 'count')
		return m('div', { class: "count" },
			m('h3', 'Какое количество сотрудников будет обучаться?'),

			m('input', { value: state.count, type: "number", oninput: e => actions.set_count(e.target.value) }),
			m('input', {
				type: "range",
				max: 99, min: 1,
				value: state.count,
				oninput: e => actions.set_count(e.target.value)
			}),
			m('.buttons',
				m('button', { onclick: () => actions.set_path("format") }, 'Назад'),
				m('button', { class: "purple", onclick: () => actions.set_path("goals") }, 'Далее'),
			),
		)
}