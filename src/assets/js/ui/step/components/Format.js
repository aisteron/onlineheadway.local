export const Format = (state, actions) => {

	let path = state.path.slice(-1)[0]

	if (path == 'format')
		return m('div', { class: "format" },
			m('h3', 'Выберите формат обучения:'),
			m('label',
				m('input', { type: "radio", checked: true }),
				m('span', { class: "c" }),
				m('span', { class: "l" }, 'Онлайн обучение на любой удобной платформе (Zoom, Google Meet, MS Teams, Skype и др)')
			),
			m('button', { class: "purple", onclick: () => actions.set_path("count") }, 'Далее'),
		)
}