const initialState = {
	alerts: process.env.NODE_ENV === 'production' ? Array() :  [
		{
			id: 1,
			type: 'add',
			item: 'bread',
			count: 2,
		},
		{
			id: 2,
			type: 'removed',
			item: 'water',
			count: 2,
		},
		{
			id: 3,
			type: 'Holstered',
			item: 'WEAPON_ADVANCEDRIFLE',
			count: 0,
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ALERT':
			return {
				...state,
				alerts: [...state.alerts, action.payload.alert],
			};
		case 'DISMISS_ALERT':
			return {
				...state,
				alerts: state.alerts.filter((a) => a.id != action.payload.id),
			};
		default: {
			return state;
		}
	}
};

export default reducer;
