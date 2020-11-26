import { GET_POKEMON } from "./type";

const handlers = {
  [GET_POKEMON]: (state, { payload }) => ({
    ...state,
    pokemon: payload,
  }),

  DEFAULT: (state) => state,
};

export const pokemonReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
