import uuid from "uuid";

export const addLegislation = ({ identity = "" } = {}) => ({
  type: "ADD_LEGISLATION",
  legislation: {
    id: uuid(),
    identity
  }
});

export const removeLegislation = ({ id } = {}) => ({
  type: "REMOVE_LEGISLATION",
  legislation: {
    id
  }
});