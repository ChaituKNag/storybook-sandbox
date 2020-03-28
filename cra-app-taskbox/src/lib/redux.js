import { createStore } from "redux";

// ACTION TYPES
export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK"
};

// ACTION CREATORS
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

// REDUCER
function reducer(state, action) {
  if (action.type === actions.ARCHIVE_TASK) {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: actions.ARCHIVE_TASK } : task
      )
    };
  }

  if (action.type === actions.PIN_TASK) {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: actions.PIN_TASK } : task
      )
    };
  }

  return state;
}

// INITIAL STATE
const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" }
];

// REDUX STORE
export default createStore(reducer, { tasks: defaultTasks });
