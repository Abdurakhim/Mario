// This function is for creating project to database
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make a sync call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Abdurakhim",
        authorLastName: "Abdurahmon",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          err
        });
      });
  };
};
