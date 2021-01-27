//const { ActionReducer, Action } = require('@ngrx/store');

import { ActionReducer, Action } from '@ngrx/store';

export const ACTIVO = 'ACTIVO';
export const INACTIVO = 'INACTIVO';
// export const RESET = 'RESET';

export function appReducer(state:object|any={
	activar: false
}, action: Action) {
	switch (action.type) {
		case ACTIVO:
			return {activar: true};
		case INACTIVO:
			return {activar: false};
		default:
			return state;
	}
}