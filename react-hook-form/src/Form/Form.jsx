import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
        userName: "",
        email: "",
        password: ""
    }
  });

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-svh bg-slate-400">
      <form onSubmit={handleSubmit(submit)} className="bg-white p-8 shadow-lg rounded-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="userName" className="block text-gray-700 font-medium mb-2">Nombre de usuario: </label>
          <input type="text" {...register("userName", {
            required: true,
            message: "Introduzca un nombre de usuario"
          })} id="userName" 
          className={`w-full p-1 border ${errors.userName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 ${errors.userName ? "focus:ring-red-500" : "focus:ring-blue-500"}`} />
          {errors.userName && (
            <span className="text-red-500 text-sm">{errors.userName.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico: </label>
          <input type="email" {...register("email", {
            required: true,
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Por favor, introduzca un correo electrónico válido"
            }
          })} id="email" 
          className={`w-full p-1 border ${errors.email ? "border-red-500" :  "border-gray-300"} rounded-md focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"}`}/>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña: </label>
          <input type="password" {...register("password", {
            required: true,
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/,
                message: "La contraseña debe incluir números, letras Mayúsculas y minúsculas y como mínimo 8 caracteres"
            }
          })} id="password" 
          className={`w-full p-1 border ${errors.password ? "border-red-500" :  "border-gray-300"} rounded-md focus:outline-none focus:ring-2 ${errors.password ? "focus:ring-red-500" : "focus:ring-blue-500"}`}/>
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
