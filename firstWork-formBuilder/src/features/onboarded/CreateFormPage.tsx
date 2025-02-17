import CreateQuestion from "../../components/form-builder-components/createFormQuestion/CreateQuestion";

function CreateFormPage() {
  return (
    <div>
      <h1>Create your form!</h1>
      <h2>
        Add questions that you want to ask your end user, once done hit create
        and see your form ready!
      </h2>

      <CreateQuestion />
    </div>
  );
}

export default CreateFormPage;
