export const State = () => ({
	path: ['format'],
	format: "online",
	count: 5,
	goals: new Set([]),
	period: "1-3",
	sphere: "",
	form: {
		name: "",
		phone: "",
		email: "",
		comment: ""
	}
});

export const Actions = state => ({

	set_count: count => state.count = count,
	set_path: path => state.path.push(path),
	set_goal: obj => obj.checked ? state.goals.add(obj.value) : state.goals.delete(obj.value),
	set_period: period => state.period = period,
	set_sphere: sphere => state.sphere = sphere,
	set_form: obj => { state.form[obj.name] = obj.value },
});