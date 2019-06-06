const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah blah" },
    { id: "2", title: "Pray all the time", content: "blah blah blah blah" },
    { id: "3", title: "Ar-Robb", content: "One of the names of Allah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    // If non of those will not work defult function will work as it doesn't have access --return state-- outside the switch statement
    default:
      return state;
  }
};

export default projectReducer;
