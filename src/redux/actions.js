import { createAction  } from "@reduxjs/toolkit";

export const getContacts = createAction("tasks/getContacts");
export const createContacts = createAction('createContacts');
export const deleteContacts = createAction("tasks/deleteContacts");
export const filterContacts= createAction("tasks/filterContacts");
