export const Sphere = (state, actions) => {
	let path = state.path.slice(-1)[0]

	if (path == 'sphere')
		return m('div', { class: "sphere" },
			m('h3', 'Укажите сферу деятельности компании'),

			m('input', {
				type: "text",
				value: state.sphere,
				onblur: e => actions.set_sphere(e.target.value),
				oncreate: ({ dom }) => setTimeout(() => window.innerWidth > 1024 && dom.focus())
			}),

			m('.buttons',
				m('button', { onclick: () => actions.set_path("time") }, 'Назад'),
				m('button', { class: "purple", onclick: () => actions.set_path("form") }, 'Далее'),
			),
		)
}