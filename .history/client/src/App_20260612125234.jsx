import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // 1. Add this import line

// Create your validation schema using Zod
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), // 2. Connect the schema resolver here
  });

  const onSubmit = (data) => {
    alert(`Validation Passed!\nData: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-white">
      <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl">
        <h2 className="text-xl font-bold mb-4 text-center">Validation Verification</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Email</label>
            <input
              type="text"
              {...register("email")}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-sm focus:border-indigo-500 focus:outline-none"
              placeholder="name@example.com"
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-sm focus:border-indigo-500 focus:outline-none"
              placeholder="••••••"
            />
            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 py-2.5 text-sm font-semibold transition-colors duration-200"
          >
            Run Validation Test
          </button>
        </form>
      </div>
    </div>
  );
}
