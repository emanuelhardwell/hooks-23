import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  //   const { formValues, onInputChange } = useForm({
  //     name: "emanuel",
  //     email: "emanuel@gmail.com",
  //     password: "password",
  //   });

  //   const { name, email, password } = formValues;

  // FORMA 2 ---> DESESTRUCTURAR TODOS LOS INPUTS DIRECTAMENTE

  const { name, email, password, onInputChange } = useForm({
    name: "emanuel",
    email: "emanuel@gmail.com",
    password: "password",
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className="text-center">Form with custom hook</h1>
          <hr />

          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
